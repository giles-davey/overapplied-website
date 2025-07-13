// This is a reusable form layout template using Tailwind-styled buttons and inputs.

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function BasicForm() {
  return (
    <form className="space-y-6">
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}
