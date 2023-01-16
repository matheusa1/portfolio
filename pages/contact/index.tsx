import { ReactElement } from 'react'
import copy from 'copy-to-clipboard'
import {
	MdLocationPin,
	MdOutlineMailOutline,
	MdSmartphone,
} from 'react-icons/md'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { SkillsText } from '../../components/SkillsText'
import { TextBottomLine } from '../../components/TextBottomLine'
import { Title } from '../../components/Title'

const Contact = (): ReactElement => {
	const iconsClassNames = 'h-10 w-10 text-bluePrimary'

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const data = new FormData(form)
		const name = data.get('name')
		const email = data.get('email')
		const message = data.get('message')
		console.log({ name, email, message })
	}

	const copyEmail = () => {
		copy('2002matheus@gmail.com')
	}

	return (
		<div className='h-full w-full'>
			<Title>Contato</Title>
			<div className='mt-7 flex flex-col px-32 sm:px-16 xs:px-8'>
				{/* MAP */}
				<div className='flex h-36 w-full items-center justify-center rounded bg-gray-500 text-8xl text-red-500'>
					MAPA
				</div>
				{/* MAP */}
				<div className='flex gap-28 py-5 xl:text-sm md2xl:flex-col md2xl:items-center'>
					<div className='flex flex-col gap-8'>
						<div className='cursor-pointer rounded-xl p-2 hover:bg-strokeBgColor'>
							<SkillsText
								title={'+55 (44) 99951-9202'}
								text={'Meu telefone de contato pessoal e Whatsapp.'}
								icon={<MdSmartphone className={iconsClassNames} />}
							/>
						</div>
						<div className='cursor-pointer rounded-xl p-2 hover:bg-strokeBgColor'>
							<SkillsText
								title={'Campo Mourão - PR - Brasil'}
								text={'Cidade onde moro e faço faculdade.'}
								icon={<MdLocationPin className={iconsClassNames} />}
							/>
						</div>
						<div
							className='cursor-pointer rounded-xl p-2 hover:bg-strokeBgColor'
							onClick={copyEmail}
						>
							<SkillsText
								title={'2002matheus@gmail.com'}
								text={
									'Meu email de contato pessoal. Clique para copiar o email'
								}
								icon={<MdOutlineMailOutline className={iconsClassNames} />}
							/>
						</div>
					</div>
					<form
						className='flex w-full flex-col gap-8'
						onSubmit={onSubmit}
					>
						<TextBottomLine>Contate-me!</TextBottomLine>
						<div className='flex w-full gap-9 2xl:flex-col'>
							<div className='flex flex-col gap-7'>
								<Input
									placeholder={'Nome e sobrenome'}
									type='text'
									addClassName='w-[521px] 3xl:w-96 2xl:w-full'
									name='name'
								/>
								<Input
									placeholder={'Email'}
									type='text'
									addClassName='w-[521px] 3xl:w-96 2xl:w-full'
									name='email'
								/>
							</div>
							<Input
								placeholder={'Mensagem'}
								type='textarea'
								addClassName='w-full 2xl:h-28'
								name='message'
							/>
						</div>
						<Button
							strokeColor={'border-bluePrimary'}
							typeof='submit'
						>
							Enviar email
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
