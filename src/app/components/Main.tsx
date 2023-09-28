
import {ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'

export function Main() {
    return(
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#"className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum MDID" />
              <strong> Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full  bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#"className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum MDID" />
              <strong> Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full  bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#"className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum MDID" />
              <strong> Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full  bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#"className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum MDID" />
              <strong> Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full  bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#"className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum MDID" />
              <strong> Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full  bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#"className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa do álbum MDID" />
              <strong> Playlist</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full  bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for carol</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum MDID" />
              <strong className='font-semibold'>Playlist</strong>
              <span className='text-sm text-zinc-400'>ProfJam</span>
            </a>
            <a className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum MDID" />
              <strong className='font-semibold'>Playlist</strong>
              <span className='text-sm text-zinc-400'>ProfJam</span>
            </a>
            <a className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum MDID" />
              <strong className='font-semibold'>Playlist</strong>
              <span className='text-sm text-zinc-400'>ProfJam</span>
            </a>
            <a className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum MDID" />
              <strong className='font-semibold'>Playlist</strong>
              <span className='text-sm text-zinc-400'>ProfJam</span>
            </a>
            <a className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum MDID" />
              <strong className='font-semibold'>Playlist</strong>
              <span className='text-sm text-zinc-400'>ProfJam</span>
            </a>
          </div>

        </main>
    )
}