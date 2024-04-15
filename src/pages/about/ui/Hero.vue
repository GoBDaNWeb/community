<script setup>
import { LogoSmallIcon } from '@/shared/icons';
</script>

<template>
	<div class="hero">
		<div class="hero-inner container">
			<div class="hero-left">
				<div class="text">
					<h1>Об общине</h1>
					<h4>СРЕДИ СВОИХ создали московские предприниматели и раввин в 2008 году</h4>
					<p>
						Молодое и кошерное сообщество современных московских евреев. Община была создана в 2008
						году раввином Йосефом Херсонским и его учениками-предпринимателями. Каждый новый гость
						может стать своим среди своих, для этого нужно лишь проявить желание и инициативу!
						<br />
						<br />
						«Среди своих» — ортодоксальная община и это означает, что мы бережно чтим святость Торы
						и тысячелетних традиций еврейского народа.
					</p>
				</div>
				<div class="alert">
					<LogoSmallIcon />
					<p>
						Любой еврей может присоединиться к общине.
						<br />
						<span>
							Любой участник общины может выступитьс инициативой развития новых направлений.
						</span>
					</p>
				</div>
			</div>
			<div class="hero-right">
				<div class="image-wrapper">
					<img src="/images/about/hero.jpg" alt="hero" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	margin-top: 80px;
	padding-bottom: 30px;
	border-bottom: 1px solid var(--border-color);
	.hero-inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
		.hero-left {
			.text {
				padding-bottom: 180px;
				border-bottom: 1px solid var(--border-color);
				h1 {
					color: var(--gray-color);
					font-weight: 500;
					font-size: 64px;
					line-height: 64px;
					letter-spacing: -1px;
				}
				h4 {
					color: var(--gray-color);
					margin-top: 50px;
					font-size: 32px;
					line-height: 32px;
					letter-spacing: -1px;
				}
				p {
					padding-top: 30px;
					color: var(--gray-color);
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
					letter-spacing: -1px;
				}
			}
			.alert {
				display: flex;
				flex-direction: column;
				gap: 30px;
				padding-top: 30px;
				svg {
					width: 50px;
					height: 65px;
				}
				p {
					color: var(--red-color);
					font-weight: 500;
					font-size: 24px;
					line-height: 28px;
					letter-spacing: -1px;
					span {
						color: var(--gold-color);
						margin-top: 10px;
						display: block;
					}
				}
			}
		}
		.hero-right {
			.image-wrapper {
				padding-bottom: 100%;
				position: relative;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
