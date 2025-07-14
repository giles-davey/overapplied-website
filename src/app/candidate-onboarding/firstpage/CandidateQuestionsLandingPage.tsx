'use client'

import React, { useState } from 'react';
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { Button } from '@/components/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from '@/components/ui/alert-dialog'
import {
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Tooltip,
} from '@/components/ui/tooltip'

export default function CandidateQuestionsLandingPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [preferredName, setPreferredName] = useState('');
  const [city, setCity] = useState('');
  const [stateRegion, setStateRegion] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [desiredRoleInput, setDesiredRoleInput] = useState('');
  const [desiredRoles, setDesiredRoles] = useState<string[]>([])
  const [workAuth, setWorkAuth] = useState('')
  const [remotePref, setRemotePref] = useState('')
  const [availability, setAvailability] = useState('')
  const [needsAccommodations, setNeedsAccommodations] = useState(false)
  const [accommodationDetails, setAccommodationDetails] = useState('')

  const currentStep = 2

  const handleSave = () => {
    console.log({
      firstName,
      lastName,
      preferredName,
      city,
      stateRegion,
      country,
      zipCode,
      desiredRoles,
      workAuth,
      remotePref,
      availability,
      needsAccommodations,
      accommodationDetails,
    })
  }

  function handleDesiredRoleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && desiredRoleInput.trim()) {
      e.preventDefault();
      if (desiredRoles.length < 3) {
        setDesiredRoles([...desiredRoles, desiredRoleInput.trim()]);
        setDesiredRoleInput('');
      }
    }
  }

  return (
    <div className="relative bg-gradient-to-br from-[#f5f3ff] via-[#faf5ff] to-white min-h-screen">
      <Container className="pb-32">
        <Navbar />
        {/* Stepper styled to match FAQ page */}
        <div className="flex justify-center mt-10 w-full">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-600 font-semibold">1</div>
            <div className="w-8 h-1 rounded-full bg-[#9647FF]"></div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#9647FF] text-white font-semibold">2</div>
            <div className="w-8 h-1 rounded-full bg-gray-300"></div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-600 font-semibold">3</div>
          </div>
        </div>

        <div className="pt-16 pb-10 text-center">
          <Heading level={1} className="text-electric-violet-800">Candidate Application</Heading>
          <Subheading className="text-gray-600 max-w-2xl mx-auto mt-4">
            Let us know more about your preferences and needs so we can match you with the right roles.
          </Subheading>
        </div>

        <form onSubmit={e => { e.preventDefault(); handleSave() }} className="space-y-6">

          {/* PERSONAL INFORMATION */}
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="block mb-1">First Name*</Label>
              <Input value={firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} required />
            </div>
            <div>
              <Label className="block mb-1">Last Name*</Label>
              <Input value={lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} required />
            </div>
            <div>
              <Label className="block mb-1">Preferred Name</Label>
              <Input value={preferredName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPreferredName(e.target.value)} />
            </div>
            <div>
              <Label className="block mb-1">City*</Label>
              <Input value={city} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)} required />
            </div>
            <div>
              <Label className="block mb-1">State*</Label>
              <Input value={stateRegion} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStateRegion(e.target.value)} required />
            </div>
            <div>
              <Label className="block mb-1">Zip Code*</Label>
              <Input value={zipCode} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)} required />
            </div>
          </div>

          {/* WORK PREFERENCES */}
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">Work Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1 max-w-md">
              <Label htmlFor="desiredRole" className="text-left self-start block mb-1">Desired Roles</Label>
              <Input
                id="desiredRole"
                name="desiredRole"
                placeholder="Enter a role and press Enter"
                className="w-full text-left self-start"
                value={desiredRoleInput}
                onChange={(e) => setDesiredRoleInput(e.target.value)}
                onKeyDown={handleDesiredRoleKeyDown}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {desiredRoles.map((role, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-800"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <TooltipProvider>
                <Tooltip
                  content={
                    <>Some roles are hybrid or in-office. Let us know your remote work preference so we don’t show you irrelevant jobs.</>
                  }
                >
                  <TooltipTrigger asChild>
                    <label className="flex flex-col mb-1">
                      <span className="text-sm font-medium block">
                        Remote Preference<span className="text-red-500">*</span>
                      </span>
                    </label>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
              <Select onValueChange={setRemotePref} value={remotePref} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select remote preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="on-site">On-site</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <TooltipProvider>
                <Tooltip
                  content={
                    <>We need to understand your work authorization so we can surface roles that align with your eligibility.</>
                  }
                >
                  <TooltipTrigger asChild>
                    <label className="text-sm font-medium mb-1 block">
                      Work Authorization <span className="text-red-500">*</span>
                    </label>
                  </TooltipTrigger>
                </Tooltip>
                <Select onValueChange={setWorkAuth} value={workAuth} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select work authorization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us-citizen">U.S. citizen or permanent resident</SelectItem>
                    <SelectItem value="valid-visa">Valid visa, no sponsorship needed</SelectItem>
                    <SelectItem value="needs-sponsorship">Needs future sponsorship</SelectItem>
                    <SelectItem value="not-authorized">Not authorized</SelectItem>
                  </SelectContent>
                </Select>
              </TooltipProvider>
            </div>

            <div>
              <Label className="block mb-1">Availability</Label>
              <Select onValueChange={setAvailability} value={availability}>
                <SelectTrigger>
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="actively-looking">Actively looking</SelectItem>
                  <SelectItem value="open-not-applying">Open to opportunities</SelectItem>
                  <SelectItem value="laid-off">Recently laid off</SelectItem>
                  <SelectItem value="not-looking">Not looking</SelectItem>
                  <SelectItem value="available-now">Available now</SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>

          {/* ACCESSIBILITY */}
          <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">Accessibility</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch checked={needsAccommodations} onCheckedChange={(checked: boolean) => setNeedsAccommodations(checked)} id="accommodations" />
              <Label htmlFor="accommodations">Do you require work accommodations?</Label>
            </div>
            {needsAccommodations && (
              <Input
                placeholder="Briefly describe any accommodations"
                value={accommodationDetails}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAccommodationDetails(e.target.value)}
              />
            )}
          </div>

          {/* Button actions */}
          <div className="border-t border-gray-200 mt-12 pt-6 flex flex-wrap justify-between gap-4">
            <Button variant="outline" className="rounded-full bg-white text-gray-800">Previous</Button>
            <div className="flex gap-2">
              <Button onClick={handleSave} className="rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">Save Profile</Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="rounded-full bg-red-600 text-white hover:bg-red-700">Delete My Data</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete your data and remove your profile. This cannot be undone.
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <Button className="rounded-full bg-electric-violet-600 hover:bg-electric-violet-700 text-white">Next</Button>
          </div>

        </form>
      </Container>
      <Footer />
    </div>
  )
}