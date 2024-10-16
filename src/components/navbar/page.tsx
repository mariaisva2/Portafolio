import Link from "next/link";

export default function Navbar(){
    return 
            <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800">
                <Link href="/projects">
                    <a className="text-2xl font-bold dark:text-gray-100">Next.js</a>
                </Link>
                <ul className="flex gap-6">
                    <li>
                        <Link href="/about">
                            <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400">Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
    
        }


