import React, { Fragment } from 'react'
import Head from 'next/head'

import Navegao from '../components/navegao'
import Gallery2 from '../components/gallery2'

const Home = (props) => {
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Devopersti - Design de Websites e Aplicações</title>
          <meta
            name="description"
            content="Criamos Websites e aplicações direcionadas para web, buscamos o público que está começando a entrar no universo digital."
          />
          <meta
            property="og:title"
            content="Devopersti - Design de Websites e Aplicações"
          />
          <meta
            property="og:description"
            content="Criamos Websites e aplicações direcionadas para web, buscamos o público que está começando a entrar no universo digital."
          />
        </Head>
        <header id="nav-home" data-role="Header" className="home-header">
          <a
            href="https://uploads.quarkly.io/644feb11aed6310020c08fdb/images/logo.svg?v=2023-05-04T20:00:23.086Z"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="logo"
              src="https://uploads.quarkly.io/644feb11aed6310020c08fdb/images/logo.svg?v=2023-05-04T20:00:23.086Z"
              className="home-image1"
            />
          </a>
          <div className="home-nav1">
            <Navegao text5="Home" rootClassName="rootClassName17"></Navegao>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav2">
              <div className="home-container11">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image2"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <Navegao rootClassName="rootClassName18"></Navegao>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-banner">
          <span className="home-text10">
            DESENVOLVIMENTO DE SITES E APLICAÇÕES WEB
          </span>
          <h1 className="home-text11">DevopersTI</h1>
          <img
            alt="image"
            src="/chris-ried-ieic5tq8ymk-unsplash-500h.jpg"
            className="home-image3"
          />
          <span className="home-text12">
            <span className="home-text13">
              Sites e aplicações prontas, feitas sob medida para o seu negócio,
            </span>
            <br></br>
            <span>
              confira um dos nossos templates para começar agora ou solicite
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>um orçamento</span>
            <br></br>
          </span>
          <div className="home-btn-group">
            <button className="home-button1 button">
              <span>
                <span>Projetos</span>
                <br></br>
              </span>
            </button>
            <button className="home-button2 button">
              Solicite um Orçamento
            </button>
          </div>
        </div>
        <Gallery2
          content1={
            <Fragment>
              <span className="home-text22">
                Deseja começar agora? selecione um template para visualizar, ou
                confira nossa galeria completa.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text23">
                Confira alguns de nossos templates
              </span>
            </Fragment>
          }
        ></Gallery2>
        <div id="orçamento" className="home-pricing">
          <div className="home-container12">
            <div id="nav-recursos" className="home-container13">
              <h1 className="home-text24">O que oferecemos?</h1>
            </div>
            <div className="home-container14">
              <div className="home-container15">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M854 768v-384h-172v384h172zM640 554v-170h-470v170h470zM640 768v-170h-470v170h470zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="home-text25">
                  <span>Identidade visual e website</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <div className="home-container16">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M622 708l198-196-198-196 60-60 256 256-256 256zM402 708l-60 60-256-256 256-256 60 60-198 196z"></path>
                </svg>
                <span className="home-text29">
                  <span>Aplicações Web</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <div className="home-container17">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M73.143 804.571h585.143v-73.143h-585.143v73.143zM73.143 512h585.143v-73.143h-585.143v73.143zM969.143 768c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM73.143 219.429h585.143v-73.143h-585.143v73.143zM969.143 475.429c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM969.143 182.857c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM1024 658.286v219.429h-1024v-219.429h1024zM1024 365.714v219.429h-1024v-219.429h1024zM1024 73.143v219.429h-1024v-219.429h1024z"></path>
                </svg>
                <span className="home-text33">
                  <span className="home-text34">Servidor e infraestrutura</span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer id="contato" className="home-footer">
          <div className="home-container18">
            <img alt="logo" src="/logo.svg" className="home-image4" />
            <div className="home-icon-group2">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon26">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon28">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon30">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-links-container">
            <div className="home-container19">
              <div className="home-container20">
                <span className="home-text37">Nossos Links</span>
                <span className="home-text38">Home</span>
                <span className="home-text39">Templates</span>
                <span className="home-text40">Recursos</span>
                <span className="home-text41">Blog</span>
              </div>
              <div className="home-container21">
                <span className="home-text42">Precisa de ajuda? </span>
                <span className="home-text43">Sobre nós</span>
                <span className="home-text44">Política de privacidade</span>
              </div>
            </div>
            <div className="home-container22">
              <div className="home-container23">
                <span className="home-text45">Contato</span>
                <span className="home-text46">Email: devopersti@gmail.com</span>
                <span className="home-text47">
                  Cel: (whatsapp): 11 99950-5200
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #000000;
          }
          .home-link {
            display: contents;
          }
          .home-image1 {
            height: 4rem;
            z-index: 100;
            background: white;
            border-color: #000000;
            border-width: 1px;
            border-radius: 50%;
            text-decoration: none;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image2 {
            height: 2rem;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-banner {
            width: 100%;
            height: 477px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            background: black;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-text10 {
            color: rgb(5, 165, 255);
          }
          .home-text11 {
            color: white;
            font-size: 3rem;
            align-self: flex-start;
            text-align: center;
          }
          .home-image3 {
            width: 100px;
            object-fit: cover;
            padding-left: 864px;
          }
          .home-text12 {
            color: white;
            max-width: var(--dl-size-size-maxwidth);
            align-self: flex-start;
            margin-top: 0px;
            text-align: left;
            margin-bottom: 0px;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button1 {
            width: auto;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-500);
            border-width: 2px;
            margin-right: 41px;
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button1:hover {
            animation: inherit;
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-500);
            border-width: 2px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 10px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-button2:hover {
            transform: scale(1.02);
          }
          .home-text22 {
            color: #05a5ff;
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-pricing {
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f5ff;
          }
          .home-container12 {
            width: 100%;
            height: 607px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-top: 4px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-container13 {
            height: 159px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text24 {
            align-self: center;
          }
          .home-container14 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: 50%;
            display: flex;
            flex-wrap: wrap;
            align-self: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-container15 {
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 30%;
            align-self: center;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-container15:hover {
            transform: scale(1.02);
          }
          .home-icon20 {
            fill: #d9d9d9;
            width: 144px;
            height: 212px;
            align-self: center;
          }
          .home-text25 {
            font-size: 1.4rem;
            align-self: center;
            text-align: center;
            font-weight: 600;
          }
          .home-container16 {
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 30%;
            align-self: center;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-container16:hover {
            transform: scale(1.02);
          }
          .home-icon22 {
            fill: #d9d9d9;
            width: 144px;
            height: 212px;
            align-self: center;
          }
          .home-text29 {
            font-size: 1.4rem;
            align-self: center;
            text-align: center;
            font-weight: 600;
          }
          .home-container17 {
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 30%;
            align-self: center;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 10px;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-container17:hover {
            transform: scale(1.02);
          }
          .home-icon24 {
            fill: #d9d9d9;
            width: 144px;
            height: 212px;
            align-self: center;
          }
          .home-text33 {
            font-size: 1.4rem;
            align-self: center;
            text-align: center;
            font-weight: 600;
          }
          .home-footer {
            width: 100%;
            height: 287px;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #000000;
          }
          .home-container18 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image4 {
            height: var(--dl-size-size-large);
            border-radius: 50%;
            background-color: white;
          }
          .home-icon-group2 {
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon26 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon28 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon30 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container19 {
            width: 652px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container20 {
            width: 156px;
            display: flex;
            align-items: flex-start;
            margin-left: 128px;
            margin-right: 70px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text37 {
            color: #ffffff;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text38 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text39 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text40 {
            color: #fffefe;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text41 {
            color: #ffffff;
          }
          .home-container21 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text42 {
            color: #ffffff;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text43 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text44 {
            color: #ffffff;
          }
          .home-container22 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container23 {
            width: 322px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text45 {
            color: #ffffff;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text46 {
            color: #ffffff;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text47 {
            color: rgb(255, 255, 255);
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .home-text12 {
              color: white;
            }
            .home-text13 {
              color: white;
            }
            .home-pricing {
              width: auto;
              height: 2025px;
              align-self: stretch;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-container12 {
              height: 1021px;
              align-items: center;
              flex-direction: column;
            }
            .home-container13 {
              align-items: center;
            }
            .home-container14 {
              width: 100%;
            }
            .home-icon24 {
              fill: #d9d9d9;
              width: 144px;
              height: 212px;
              align-self: center;
            }
            .home-text33 {
              font-size: 1.4rem;
              font-weight: 600;
            }
            .home-text34 {
              font-size: 1.4rem;
              font-weight: 600;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-container18 {
              align-items: center;
            }
            .home-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              flex-direction: row;
            }
            .home-container19 {
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text12 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text13 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container12 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container14 {
              flex-direction: column;
            }
            .home-container15 {
              width: 100%;
            }
            .home-container16 {
              width: 100%;
            }
            .home-container17 {
              width: 100%;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image4 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-container19 {
              width: 100%;
              justify-content: space-between;
            }
            .home-container21 {
              margin-right: 0px;
            }
            .home-container22 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-container23 {
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-container12 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-image4 {
              margin-bottom: 0px;
            }
            .home-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-container19 {
              align-items: center;
              margin-right: 0px;
              justify-content: space-between;
            }
            .home-container20 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-container21 {
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
