import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='border-b-2 border-gray-200 sticky'>
      <div className='flex justify-between gap-10 p-5'>
        <div className='flex gap-5 items-center'>
          <div>
            <MenuIcon />
          </div>
          <div className='flex items-center'>
            <div>
              <Image
                src="/forms-logo.svg"
                alt="Forms Logo"
                width={36}
                height={36}
                priority
              />
            </div>
            <div>
              <h1 className='text-2xl font-semibold'>Google <span className='text-[#55358a]'>Forms</span> Clone</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
