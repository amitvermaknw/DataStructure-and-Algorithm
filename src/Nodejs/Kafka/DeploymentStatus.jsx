import { useEffect, useState } from 'react';
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000', {
    reconnectAttempts: 5,
    reconnectionDelay: 2000
})

export default function DeploymentStatus(deploymentId) {
    const [vmStatus, setVmStatus] = useState({})
    const [connect, setConnected] = useState(false)

    useEffect(() => {
        socket.on('connect', () => {
            setConnected(true)
            socket.emit('subscribe', deploymentId)
        })

        socket.on('disconnect', () => {
            setConnected(false)
        })

        socket.on('reconnect', () => {
            socket.emit('subscribe', deploymentId)
        })

        socket.on('deployment-update', ({ vmName, status, log }) => {
            setVmStatus(prev => ({
                ...prev,
                [vmName]: { status, log }
            }))
        })
    }, [deploymentId]);

    return (
    <div>
      <p>Status: {connect ? '🟢 connect' : '🔴 Reconnecting...'}</p>
      {Object.entries(vmStatus).map(([vm, { status }]) => (
        <div key={vm}>
          <span>{vm}</span>
          <span>{status === 'SUCCESS' ? '✅' : '❌'} {status}</span>
        </div>
      ))}
    </div>
  );
}