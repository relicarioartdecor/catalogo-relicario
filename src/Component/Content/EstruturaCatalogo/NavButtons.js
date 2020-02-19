import React from 'react'
import "./NavStyle.css"

const NavButtons = props => {
	
			// next, prev, 
		const { next, prev, current } = props	
		return (
			<div>
		        <section className="top-bar">
		          {/* BOTÃO PARA PÁGINA ANTERIOR */}
		          <button 
		          	id="prev-page" 
		          	className="btn"
		          	onClick={prev}
		          	disabled={current.pagAtual <= 0 ? true : false}>
          			Anterior 
      			    <i className="fas fa-arrow-circle-left m-1"></i>
      			  </button>


		            {/* NAVEGAÇÃO ENTRE PÁGINAS */}
		            <span className="info-page">
		              <span className="page-num">{current.pagAtual + 1}</span>
		              	de
		              <span className="page-cont">{current.imagem.length}</span> {/* função com a quantidade total de páginas */}
		            </span>

		          {/* BOTÃO PARA PÁGINA POSTERIOR */}
		          <button 
		          	className="btn" 
		          	id="next-page" 
		          	onClick={next} 
		          	disabled={current.pagAtual >= (current.imagem.length - 1) ? true : false}>

		          Próximo
		            <i className="fas fa-arrow-circle-right m-1"></i>
		          </button>
		        </section>
			</div>
		)
	}

export default NavButtons