import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function EditForum() {
  return (
    <div className="grid w-full gap-2 p-60">
      <Textarea placeholder="Type your message here." />
      <input type="file" />
      <Button>Send message</Button>
    </div>
  )
}
