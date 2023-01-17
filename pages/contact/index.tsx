import { ReactElement, useState } from 'react'
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
import { Toast } from '../../components/Toast'

const Contact = (): ReactElement => {
	const [open, setOpen] = useState(false)

	const iconsClassNames = 'h-10 w-10 text-bluePrimary flex-none'

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
		setOpen(true)
		setTimeout(() => {
			setOpen(false)
		}, 2000)
	}

	return (
		<div className='h-full w-full'>
			<Toast
				open={open}
				text={'Texto copiado para a área de transferência!'}
			/>
			<Title>Contato</Title>
			<div className='mt-7 flex flex-col px-32 sm:px-16 xs:px-8'>
				{/* MAP */}
				<div className='flex h-36 w-full items-center justify-center rounded bg-gray-500 text-8xl text-red-500'>
					MAPA
				</div>
				{/* MAP */}
				<div className='flex gap-28 py-5 xl:text-sm md2xl:flex-col md2xl:items-center'>
					<div className='flex flex-col gap-8'>
						<div
							className='cursor-pointer rounded-xl p-2 hover:bg-strokeBgColor'
							onClick={() =>
								window.open(
									`https://web.whatsapp.com/send?phone=${process.env.MY_NUMBER}&text=Olá, Matheus!`
								)
							}
						>
							<SkillsText
								title={'+55 (44) 99951-9202'}
								text={
									'Meu telefone de contato pessoal e Whatsapp. Clique para abrir o Whatsapp.'
								}
								icon={<MdSmartphone className={iconsClassNames} />}
							/>
						</div>
						<div
							className='cursor-pointer rounded-xl p-2 hover:bg-strokeBgColor'
							onClick={() =>
								window.open(
									'https://www.google.com/maps/place/Campo+Mour%C3%A3o,+PR/@-24.0427844,-52.4261921,13z/data=!3m1!4b1!4m5!3m4!1s0x94ed751052cee71d:0x72e478adcc937cc6!8m2!3d-24.043799!4d-52.3810637'
								)
							}
						>
							<SkillsText
								title={'Campo Mourão - PR - Brasil'}
								text={
									'Cidade onde moro e faço faculdade. Clique para abrir o mapa'
								}
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
