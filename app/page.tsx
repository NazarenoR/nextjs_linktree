import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { Chip } from "@nextui-org/chip";

/*
	Create a Card to nest the link tree in
	Create a next/image 
	Create some ...
	Create a text description of user
	Create cards for each user link
*/

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
			<Card shadow="lg">	
				<CardBody>
					<div  className="flex flex-col w-full">
						<div className="flex justify-center">
							<Image 
								src="/rtdlogo.png"
								alt="RTD Logo"
								width={150}
								height={150}
								className="justify-center rounded-lg"

							/>
						</div>
						<div className="flex justify-center pt-2">
							<h2 className="text-3xl font-bold">RafTheDev</h2>
						</div>
						<div className="flex justify-center m-4 gap-4">
							<Chip 
								variant="shadow"
								color="primary"
								size="sm"
							
							>
								Web Dev
							</Chip>
							<Chip 
								variant="shadow"
								color="primary"
								size="sm"
							
							>
								Football
							</Chip>
							<Chip 
								variant="shadow"
								color="primary"
								size="sm"
							
							>
								Não Sei
							</Chip>
						</div>
						<div className="flex justify-center max-w-sm">
							<p className="text-lg text-center font-semibold">
								This is a random paragraph. Raf is a frontend web developer. 

							</p>
						
						</div>
						<div className="flex flex-col justify-center gap-4 pt-4">
							  <a href="https://www.youtube.com/channel/UC2u1aV7BM0aHhQ4ABEgfsVQ" target="_blank">
								<Card className="w-full" isHoverable>
									<CardBody className="p-3">
										<h3 className="self-center text-lg">YouTube rafTheDev</h3>
									</CardBody>
								</Card>
							  </a>
						</div>

					</div>
				</CardBody>
			</Card>
		</section>
	);
}
