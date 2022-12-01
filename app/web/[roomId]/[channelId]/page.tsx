import { RightHeader, Composer } from 'components'

export default function Page({ params }: { params: { channelId: string } }) {
  console.log('channelId', params)
  return (
    <div className="relative hidden flex-1 bg-white dark:bg-[#36393F] md:flex">
      <div className="relative flex h-full w-full flex-col">
        <RightHeader />
        <div className="flex-1 bg-red-200">123</div>
        <div className="relative max-h-[300px] min-h-[68px] w-full px-4">
          <Composer />
        </div>
      </div>
    </div>
  )
}
