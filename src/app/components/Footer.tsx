import {Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2Icon, ListMusic, MonitorSpeaker, Volume2} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    return(
        <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image src="/album.jpg" width={65} height={65} alt="Capa do álbum MDID" />
          <div className='flex flex-col'>
            <strong className='text-normal'>INTRO</strong>
            <span className='text-xs text-zinc-400'>ProfJam</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full  bg-white text-black'>
                <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />

          </div>

          <div className='flex items-center gap-3'>
            <span className='text-xs text-zinc-400'>0:22</span>
            <div className='h1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-6 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>1:23</span>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <Mic2Icon size={20} />
          <ListMusic size={20} />
          <MonitorSpeaker size={20} />

          <div className='flex items-center gap-4'>
            <Volume2 size={20} />
              <div className='h1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-24 h-1 rounded-full'></div>
              </div>
          </div>
        </div>
      </footer>
    )
}