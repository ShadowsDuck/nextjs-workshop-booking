import { Button } from '../ui/button'
import { LoaderCircle } from 'lucide-react'

const Buttons = ({ text, isPending }: { text: string; isPending: boolean }) => {
  return (
    <Button className="mt-2 capitalize" disabled={isPending}>
      {isPending ? (
        <div className="flex items-center gap-2">
          <LoaderCircle className="animate-spin" />
          <span>Please wait...</span>
        </div>
      ) : (
        <span>{text}</span>
      )}
    </Button>
  )
}
export default Buttons
