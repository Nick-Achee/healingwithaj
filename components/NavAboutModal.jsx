import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


const bio = [
{
  par: "My name is Alexa James, but you can call me Lexi! It is a pleasure to meet you. Sometimes it blows my mind that I am introducing myself as a healer. Coming from a family of physicians, I grew up only being knowledgeable of Western medicine. If you have an issue, pop a pill and be on your way. That was all I knew.",
},
{
  par: "At twelve years old, I was diagnosed with Grave Disease that flipped my whole world upside down. I did everything my doctor told me to do. I took my medicine, stopped all my physical activities, and took monthly blood tests.  Eventually, my  illness became stabilized but I was not interested in just covering up the symptoms.  I wanted to heal the root of the issue and know the “why” behind my illness.",
},{
  par: "At the same time, my mother was experiencing her own medical issues. She was medicated so heavily that sh e was not herself anymore. She embarked on a journey of alternative healing to find herself again. Once she found it, she was eager to introduce me to her approach: Eastern medicine. ",
},{
  par: "I was fascinated. Most of it didn’t make any sense at the time, but that did not matter to me. What mattered was that I saw that bridging the gap between alternative Eastern and traditional Western medicine brought forth transformational results that I knew deep down were possible.",
},{
  par: "At age fourteen, I went for a healing session with a Master Shaman. The minute our first session began, I felt something awaken inside of me. I saw myself within her, and I saw who I wanted to become. She knew what I had to offer the world and offered to train me.  Little did I know how much my life was about to change. She became my Guru.",
},{
  par: "I have spent every day since then working on the purification of my mind, body, and spirit, all while learning about the physical, mental, and vital planes of the human existence.  As I grew as a student, I grew as a healer. While I have attained the title of a healer, my path of spiritual education and purification is a never-ending journey. I am always in the process of gaining new certifications because the more I learn, the more I can help others. That is what matters most to me.",
},{
  par: "I knew that if I wanted to heal others, I would get to heal myself first. Luckily, I had a lot to heal! Anxiety, depression, PTSD, Graves disease, and a binge-eating disorder are just a few of the challenges I faced. As I healed my own issues, I would in turn teach others how to do the same. Every time I learn something new, I am eager to share it with the world.",
},{
  par: "It wasn’t until tragedy struck that I knew it was time for me to create my own practice: someone very dear to me ended his life. I channeled him the night he passed. He told me it was time to focus my life on what I was born to do: heal. He has held me accountable every day since then to make sure I have been holding true to my purpose.",
},{
  par: "Thus “Heal With AJ” was created. ",
},
{
  par: "My sole purpose is to help people, and that will forever be the agenda of “Heal With AJ”. No matter who you are or what you have been through, I will always devote myself to your growth and healing. When you are with me, you are honored and loved unconditionally. It is my most sincere wish that during our time together, you feel safe enough to accept my healing and develop the skills and mindset that will allow you to live a fuller, healthier, and more satisfying life.",
}
]



export default function AboutModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 z-40 flex ">
        <button
          type="button"
          onClick={openModal}
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          About
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900 mb-6"
                  >
                    About AJ
                  </Dialog.Title>
                    
                    {bio.map((bios) => (
  <div
    key={bios.id}
    className="mt-2"> 
    <div className="text-sm text-gray-500 mb-8">{bios.par}</div>
</div>

))}
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

