export default function Page({ params }: { params: { channelId: string } }) {
  console.log('channelId', params)
  return (
    <div className="hidden md:flex">
      <div>123123</div>
    </div>
  )
}
