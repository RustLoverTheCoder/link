export default function Page({ params }: { params: { channelId: string } }) {
  console.log('channelId', params)
  return (
    <div className="hidden flex-1 bg-white dark:bg-[#36393F] md:flex">
      <div>123123</div>
    </div>
  )
}
