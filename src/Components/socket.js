import { io } from 'socket.io-client';

const ENDPOINT = 'http://193.137.203.110:5000/';

export const socket = io(ENDPOINT);
export let socketID = '';
socket.on('connect', () => {
    socketID = socket.id
});
