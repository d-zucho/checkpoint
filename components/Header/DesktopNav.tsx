import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";


const DesktopNav = () => {
	return (
		<nav className={'w-full'}>
			<MaxWidthWrapper>
				<nav
					className={'flex items-center'}
				>
					<div
						className={'flex items-center space-x-10'}
					>{/* LOGO */}
						<Link href={'/'}>
							<Image src={'/logo.svg'} alt={'logo'} width={140}
										 height={30}/>
						</Link>

						{/*	NAV LINKS */}
						<div
							className={'flex items-center gap-6'}
						>
							{
								NAV_LINKS.map(({label, href}) => (
									<Link
										key={label}
										href={href}
										className={'text-gray-500 hover:text-primary'}
									>{label}</Link>
								))
							}
						</div>
					</div>
				</nav>
			</MaxWidthWrapper>
		</nav>
	);
};

export default DesktopNav;