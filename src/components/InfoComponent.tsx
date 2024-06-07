// components/InfoComponent.tsx
import React from 'react'
import '../styles/custom.css'
import Layout from './Layout'

const InfoComponent: React.FC = () => {
  const tips = [
    'Utilize sacos reutilizáveis ​​em vez de plásticos',
    'Certifique-se de reciclar corretamente o plástico e outros materiais, para evitar que acabem nos oceanos',
    'Junte-se a organizações locais que realizam limpezas costeiras. Isso ajuda a remover o lixo das praias antes que chegue ao oceano.',
    'Eduque-se sobre os problemas enfrentados pelos oceanos e compartilhe esse conhecimento com os outros. A conscientização é fundamental para promover mudanças positivas',
    'Apoie políticas e regulamentações que visam proteger os oceanos e reduzir a poluição marinha.'
  ]

  return (
    <Layout>
      <div className="info-component card">
        <h1 className="text-2xl font-bold mb-4">Dicas de Proteção dos Oceanos</h1>
        <ul>
          {tips.map((tip, index) => (
            <li key={index} className="mb-2">{tip}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default InfoComponent
