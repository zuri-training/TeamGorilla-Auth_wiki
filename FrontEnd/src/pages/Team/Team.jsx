import React from 'react'
import "../../assets/styles/Team.css";
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
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849525/GORILLA/IMG_20220222_093424_596_-_Brandon_Armand_kdj1yk.jpg'
						alt='team-member-1'
						name='Brandon Armand Nyamkimbi'
						role='Fullstack Developer'
						status='Team Lead'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849526/GORILLA/profile_image_-_Ogunlalu_Ademola_abminb.jpg'
						alt='team-member-2'
						name='Ogunlalu Ademola'
						role='Product Designer'
						status='Asst. Team Lead'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1671080523/GORILLA/IMG_3279_-_Oluwasijibomi_Simeon_kfqhpm.jpg'
						alt='team-member-3'
						name='Oluwasijibomi Solola'
						role='Fulstack Developer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849526/GORILLA/IMG_20221129_102615_-_Olubimi_Michael_kcm84w.jpg'
						alt='team-member-4'
						name='Olubimi Michael Olumide'
						role='Fullstack Developer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849526/GORILLA/my_passport_-_OLAYINKA_SHEBA_tc6lsi.jpg'
						alt='team-member-5'
						name='Olayinka Ismaila'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849524/GORILLA/IMG_20210905_184727_944_-_Animadu_Blessing_tzfjjp.webp'
						alt='team-member-6'
						name='Blessing Ogwu'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849523/GORILLA/EF6A9F73-06F4-4370-8A98-CAE17B0DA23E_-_Erickson_Akhabue_trqea5.jpg'
						alt='team-member-7'
						name='Erickson Akhabue'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849524/GORILLA/Grace_Eyiolawi_-_Grace_Eyiolawi_nyq8nb.jpg'
						alt='team-member-8'
						name='Grace Eyiolawi'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670952447/GORILLA/Aliyu_pas_-_ebiloma_aliyu_ftlaz7.jpg'
						alt='team-member-9'
						name='Ebiloma Aliyu'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849523/GORILLA/426F394E-B334-419E-A8EB-EAB9B37C40A8_-_Omua_Dominion_tjxahz.jpg'
						alt='team-member-10'
						name='Owiku Dominion Omua'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849523/GORILLA/1662589470483_-_Ajayi_Victor_stve5r.jpg'
						alt='team-member-11'
						name='Victor Ajayi'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670857556/GORILLA/3DAFF248-C6D2-437D-9051-4BE90D3CA161_-_Obe_Tessy_udsymm.jpg'
						alt='team-member-12'
						name='Obe Theresa Onyeka'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670952446/GORILLA/20220307_085737_-_Abdulwaheed_Aminat_rnhexd.jpg'
						alt='team-member-13'
						name='Aminat Abdulwaheed'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849524/GORILLA/IMG-20221121-WA0021_-_FRIDAH_JOSEPHINE_KAWALA_fzxlj7.jpg'
						alt='team-member-14'
						name='Kawala Fridah Josephine'
						role='Product Designer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670870261/GORILLA/20221007_164209_1_exec1s.jpg'
						alt='team-member-15'
						name='Aigbiluese Ehidiamhen'
						role='Frontend Developer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849525/GORILLA/IMG_20210610_103700_550_2_-_Kingsblog_network_grpr2f.jpg'
						alt='team-member-16'
						name='Omosaye Moses Iseoluwa'
						role='Frontend Developer'
					/>
					<Template
						src='https://res.cloudinary.com/dbfqhe9vc/image/upload/v1670849524/GORILLA/IMG-20221210-WA0026_-_Nwaoghor_Praise_ngjtz9.jpg'
						alt='team-member-17'
						name='Nwaoghor Praise Chukunweiken'
						role='Backend Developer'
					/>
					<Template
						src='https://raw.githubusercontent.com/Analog-ng/Oluwabamise/master/img/resume_assets/bammy.JPG?token=GHSAT0AAAAAAB36GZ4Q3MMUIM7NTUTGGW3AY44VXAA'
						alt='team-member-18'
						name='Olatunji Oluwabamise'
						role='Backend Developer'
					/>
				</div>
			</div>
		);
}
