import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors:{origin:'*'},namespace:'/duel'})
export class DuelGateway{
 @WebSocketServer() server!:Server;
 private queue:Socket[]=[];
 @SubscribeMessage('match:queueJoin') join(@ConnectedSocket() socket:Socket){
   if(this.queue.some(s=>s.id===socket.id))return;
   const opponent=this.queue.shift();
   if(!opponent){this.queue.push(socket);socket.emit('match:queueWaiting');return;}
   const matchId=`match_${Date.now()}`; const firstMoverId=Math.random()>.5?socket.id:opponent.id;
   const payload={matchId,firstMoverId,timeBankMs:180000,wordLength:5};
   this.server.to(socket.id).emit('match:found',{matchId,opponentId:opponent.id});
   this.server.to(opponent.id).emit('match:found',{matchId,opponentId:socket.id});
   this.server.to(socket.id).emit('match:start',payload);this.server.to(opponent.id).emit('match:start',payload);
 }
 @SubscribeMessage('match:guessSubmit') guess(@ConnectedSocket() socket:Socket,@MessageBody() body:{matchId:string;word:string}){
   this.server.emit('match:guessResult',{...body,nextTurnPlayerId:'server-authoritative',feedback:[]});
 }
 @SubscribeMessage('match:opponentTyping') typing(@ConnectedSocket() socket:Socket,@MessageBody() body:{matchId:string;typing:boolean}){this.server.emit('match:opponentTyping',{matchId:body.matchId,typing:body.typing});}
}
