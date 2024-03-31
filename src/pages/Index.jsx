import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
      <nav className="flex justify-between items-center p-6">
        <div>
          <img src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGFzc2lzdGFudCUyMGxvZ298ZW58MHx8fHwxNzExODQzMTgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" className="h-12" />
        </div>
        <div className="space-x-6 text-lg">
          <a href="#features" className="hover:text-purple-200">
            Features
          </a>
          <a href="#pricing" className="hover:text-purple-200">
            Pricing
          </a>
          <a href="#contact" className="hover:text-purple-200">
            Contact
          </a>
        </div>
      </nav>

      <main className="mt-24 mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          A new medium for helpdesk. <br />
          Powered by <span className="text-purple-200">GenAI</span>.
        </h1>
        <p className="text-xl mb-12">Go beyond data collection with conversational forms that don't just ask... but also respond.</p>

        <a href="#" className="bg-white text-purple-800 px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center">
          Try for Free <FaPlus className="ml-2" />
        </a>
      </main>

      <section id="features" className="mt-32 mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="https://images.unsplash.com/photo-1679403766682-3b31efa571a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3R8ZW58MHx8fHwxNzExODQzMTgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Chatbot" className="rounded-lg shadow-lg mb-6" />
            <h3 className="text-2xl font-bold mb-4">Intelligent Chatbots</h3>
            <p>Engage customers with AI-powered chatbots that understand context and provide relevant responses.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1613244470189-15e1da3279d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDb252ZXJzYXRpb25hbCUyMGZvcm18ZW58MHx8fHwxNzExODQzMTgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Conversational Form" className="rounded-lg shadow-lg mb-6" />
            <h3 className="text-2xl font-bold mb-4">Conversational Forms</h3>
            <p>Collect information through engaging, interactive forms that adapt based on user input.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxObyUyMGNvZGUlMjBBSXxlbnwwfHx8fDE3MTE4NDMxODN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="No Code AI" className="rounded-lg shadow-lg mb-6" />
            <h3 className="text-2xl font-bold mb-4">No-Code AI</h3>
            <p>Harness the power of AI without writing a single line of code. Easily build and deploy AI assistants.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mt-32 text-center">
        <h2 className="text-4xl font-bold mb-12">Simple, Transparent Pricing</h2>
        {}
      </section>

      <section id="contact" className="mt-32 text-center">
        <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
        <p className="text-xl mb-8">Ready to revolutionize your helpdesk? Contact us to learn more.</p>
        <a href="mailto:info@example.com" className="bg-white text-purple-800 px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center">
          Contact Us <FaPlus className="ml-2" />
        </a>
      </section>

      <footer className="mt-32 mx-auto max-w-5xl text-center py-12 border-t border-purple-400">
        <p>© 2023 GenAI Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
