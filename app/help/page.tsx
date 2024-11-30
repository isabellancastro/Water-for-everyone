export default function Help() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-navy-900 mb-8">Need help?</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Step 1</h3>
            <p>Go to the menu and clic on "Identify"</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Step 3</h3>
            <p>The plataform will identify the condition of the water and clasify it in one of the 3 categories</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Step 5</h3>
            <p>Questions and answers from the forum will be also suggested to you</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Step 2</h3>
            <p>Clic on the camera icon and take or upload a picture of the place</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Step 4</h3>
            <p>Tips and actions to take will be recommended according to the situation</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Step 6</h3>
            <p>Contact nearby volunteers to help you to act and share your experience!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

