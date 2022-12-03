import { RightHeader, Composer, MessageList } from 'components'

export default function Page({ params }: { params: { channelId: string } }) {
  console.log('channelId', params)
  return (
    <div className="relative hidden flex-1 bg-white dark:bg-[#36393F] md:flex">
      <div className="relative flex h-full w-full flex-col">
        <RightHeader />
        <div className="relative flex-1">
          <MessageList />
        </div>
        <div className="relative min-h-[68px] w-full px-4 pb-6">
          <Composer />
        </div>
      </div>
    </div>
  )
}
