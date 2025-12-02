import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";


const DesktopNav = () => {
	return (
		<nav className={'w-full'}>
			<MaxWidthWrapper>
				<nav>
					<Link href={'/'}>
						<Image src={'/logo.svg'} alt={'logo'} width={140} height={30} />
					</Link>
				</nav>
			</MaxWidthWrapper>
		</nav>
	);
};

export default DesktopNav;