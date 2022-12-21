import React from 'react'
import "../../assets/styles/Team.css";
import team_member_1 from "../../assets/images/team/Brandon Armand.webp"
import team_member_2 from "../../assets/images/team/Ogunlalu Ademola.webp"
import team_member_3 from "../../assets/images/team/Oluwasijibomi Simeon.webp"
import team_member_4 from "../../assets/images/team/Olubimi Michael.webp"
import team_member_5 from "../../assets/images/team/OLAYINKA SHEBA.webp"
import team_member_6 from "../../assets/images/team/Animadu Blessing.webp"
import team_member_7 from "../../assets/images/team/Erickson Akhabue.webp"
import team_member_8 from "../../assets/images/team/Grace Eyiolawi.webp"
import team_member_9 from "../../assets/images/team/Aliyu pas - ebiloma aliyu.webp"
import team_member_10 from "../../assets/images/team/Omua Dominion.webp"
import team_member_11 from "../../assets/images/team/Ajayi Victor.webp"
import team_member_12 from "../../assets/images/team/Obe Tessy.webp"
import team_member_13 from "../../assets/images/team/Abdulwaheed Aminat.webp"
import team_member_14 from "../../assets/images/team/FRIDAH JOSEPHINE KAWALA.webp"
import team_member_15 from "../../assets/images/team/Ehidiamhen Aigbiluese.webp"
import team_member_16 from "../../assets/images/team/Kingsblog network.webp"
import team_member_17 from "../../assets/images/team/Nwaoghor Praise.webp"
import team_member_18 from "../../assets/images/team/Oluwabamise Olatunji.webp"

import Template from './template/template'

export default function Team () {
    return (
			<div className='team'>
				<header className='heading'>
					<h1>Our Team Members</h1>
					<p>
						Meet our team of developers, designers, <br /> and world-class
						problem solvers.
					</p>
				</header>
				<div className='team-members'>
					<Template
						src={team_member_1}
						alt='team-member-1'
						name='Brandon Armand Nyamkimbi'
						role='Fullstack Developer'
						status='Team Lead'
					/>
					<Template
						src={team_member_2}
						alt='team-member-2'
						name='Ogunlalu Ademola'
						role='Product Designer'
						status='Asst. Team Lead'
					/>
					<Template
						src={team_member_3}
						alt='team-member-3'
						name='Oluwasijibomi Solola'
						role='Fulstack Developer'
					/>
					<Template
						src={team_member_4}
						alt='team-member-4'
						name='Olubimi Michael Olumide'
						role='Fullstack Developer'
					/>
					<Template
						src={team_member_5}
						alt='team-member-5'
						name='Olayinka Ismaila'
						role='Product Designer'
					/>
					<Template
						src={team_member_6}
						alt='team-member-6'
						name='Blessing Ogwu'
						role='Product Designer'
					/>
					<Template
						src={team_member_7}
						alt='team-member-7'
						name='Erickson Akhabue'
						role='Product Designer'
					/>
					<Template
						src={team_member_8}
						alt='team-member-8'
						name='Grace Eyiolawi'
						role='Product Designer'
					/>
					<Template
						src={team_member_9}
						alt='team-member-9'
						name='Ebiloma Aliyu'
						role='Product Designer'
					/>
					<Template
						src={team_member_10}
						alt='team-member-10'
						name='Owiku Dominion Omua'
						role='Product Designer'
					/>
					<Template
						src={team_member_11}
						alt='team-member-11'
						name='Victor Ajayi'
						role='Product Designer'
					/>
					<Template
						src={team_member_12}
						alt='team-member-12'
						name='Obe Theresa Onyeka'
						role='Product Designer'
					/>
					<Template
						src={team_member_13}
						alt='team-member-13'
						name='Aminat Abdulwaheed'
						role='Product Designer'
					/>
					<Template
						src={team_member_14}
						alt='team-member-14'
						name='Kawala Fridah Josephine'
						role='Product Designer'
					/>
					<Template
						src={team_member_15}
						alt='team-member-15'
						name='Aigbiluese Ehidiamhen'
						role='Frontend Developer'
					/>
					<Template
						src={team_member_16}
						alt='team-member-16'
						name='Omosaye Moses Iseoluwa'
						role='Frontend Developer'
					/>
					<Template
						src={team_member_17}
						alt='team-member-17'
						name='Nwaoghor Praise Chukunweiken'
						role='Backend Developer'
					/>
					<Template
						src={team_member_18}
						alt='team-member-18'
						name='Olatunji Oluwabamise'
						role='Backend Developer'
					/>
				</div>
			</div>
		);
}
