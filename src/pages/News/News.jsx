import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftsideNav from "../shared/LeftsideNav/LeftsideNav";
import RightsideNav from "../shared/RightsideNav/RightsideNav";


const News = () => {
    const {id}=useParams()
    
    
    return (
        
        <div>
            <Header></Header>
            <div className="container mx-auto  grid grid-cols-2 gap-3 mt-10">
            <div className="cols-span-2">
            <h2 className="mx-auto ml-5 mt-5"><span className="font-bold">In a historic move</span>, President Joe Biden underscored the unwavering commitment of the United States to bolstering Ukraine's defense against Russian aggression. The announcement, made on Wednesday, August 24, 2022, marked a pivotal moment as Ukraine observed its independence day amidst the challenges posed by the Russian invasion six months prior.

Emphasizing solidarity with the people of Ukraine in their struggle to safeguard sovereignty, President Biden declared a monumental aid package, allocating nearly $3 billion in U.S. military assistance to Kyiv. This financial commitment, deemed the largest tranche of security support to date, reflects the determination to fortify Ukraine's position in the face of geopolitical tensions.

The aid encompasses multifaceted support, addressing critical aspects of Ukraine's security infrastructure. As global leaders closely monitor these developments, the substantial investment signals a united front against threats to regional stability. The geopolitical landscape continues to evolve, and the pledge of significant financial aid serves as a testament to the enduring partnership between the United States and Ukraine in the pursuit of peace and security.</h2>
            </div>
            <div className="w-2/3 ml-5">
                <RightsideNav></RightsideNav>
            </div>
            </div>
        </div>
    );
};

export default News;