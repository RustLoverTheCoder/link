export default function Page({ params }: { params: { roomId: string } }) {
  const roomId = params.roomId
  console.log('roomId', roomId)
  return (
    <div>
      <div>123</div>
    </div>
  )
}
