import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Forum() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-navy-900 mb-8">Connect with others</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="bg-gray-200 p-2 mb-4">
              <h3 className="font-bold">Lucia Guerra - 47 years - Atacama Desert, CHili</h3>
            </div>
            <p className="mb-4">
              Water is scarce here, and it's often hard to tell if the little we find is safe
              to drink. I've tried using the app to check a nearby source, but I'm not
              sure how to purify it after identifying it as unsafe. Does anyone have
              simple methods or advice for purifying water in remote areas like mine?
            </p>
            <div className="bg-gray-200 p-2 mb-4">
              <p className="font-bold">7 answers</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-sky-300 w-8 h-8 flex items-center justify-center rounded">
                M
              </div>
              <p>
                Hi Lucia, I'm Maria from Mali. We use sand filters and boiling; it works well.
                Let me know if you need more tips!
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Write something!</h3>
            <Textarea className="mb-4" rows={6} />
            <Button className="w-full">Post</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

