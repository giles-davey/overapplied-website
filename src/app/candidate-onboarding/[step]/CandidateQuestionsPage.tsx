

'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const formSchema = z.object({
  location: z.string().min(1, 'Location is required'),
  desiredTitles: z.array(z.string()).min(1, 'At least one desired title is required'),
  workAuth: z.string().min(1),
  certify: z.boolean().refine(val => val === true, {
    message: 'You must certify the information is true',
  }),
  remote: z.string().min(1),
  availability: z.string().optional(),
  github: z.string().optional(),
  blog: z.string().optional(),
  needsAccommodations: z.boolean(),
  accommodationsText: z.string().optional(),
})

export default function CandidateQuestionsPage() {
  const [titleInput, setTitleInput] = useState('')
  const [titles, setTitles] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      desiredTitles: [],
      needsAccommodations: false,
    },
  })

  const addTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && titleInput.trim()) {
      e.preventDefault()
      if (!titles.includes(titleInput.trim())) {
        const updated = [...titles, titleInput.trim()]
        setTitles(updated)
        form.setValue('desiredTitles', updated)
        setTitleInput('')
      }
    }
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('FORM SUBMITTED:', values)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-electric-violet-600">Candidate Profile Setup</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Location</FormLabel>
                <FormControl>
                  <Input placeholder="City, State or Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel>Desired Role / Title (up to 3)</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g. Software Engineer"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                onKeyDown={addTitle}
              />
            </FormControl>
            <div className="flex gap-2 mt-2 flex-wrap">
              {titles.map((title, idx) => (
                <Badge key={idx} variant="outline">{title}</Badge>
              ))}
            </div>
          </FormItem>

          <FormField
            control={form.control}
            name="workAuth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Authorization</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="citizen">U.S. citizen or permanent resident</SelectItem>
                    <SelectItem value="visa-no-sponsor">Valid work visa, no future sponsorship needed</SelectItem>
                    <SelectItem value="visa-needs-sponsor">Visa requiring future sponsorship</SelectItem>
                    <SelectItem value="unauthorized">Not authorized to work in U.S.</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="certify"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-start">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-sm">
                  I certify that the work authorization information I’ve provided is true and accurate.{' '}
                  <a href="/terms" className="text-electric-violet-600 underline">Terms of Service</a>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remote"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remote Preference</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Availability Status (optional)</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="active">Actively looking</SelectItem>
                    <SelectItem value="open">Open to opportunities</SelectItem>
                    <SelectItem value="laid-off">Recently laid off / furloughed</SelectItem>
                    <SelectItem value="not-looking">Not currently looking</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="github"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub / Portfolio URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/yourname" type="url" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="blog"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blog</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourblog.com" type="url" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="needsAccommodations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you require work accommodations?</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          {form.watch('needsAccommodations') && (
            <FormField
              control={form.control}
              name="accommodationsText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Describe accommodations (optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Let us know how we can support you" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className="bg-electric-violet-600 text-white hover:bg-electric-violet-700">Submit</Button>
        </form>
      </Form>
    </div>
  )
}