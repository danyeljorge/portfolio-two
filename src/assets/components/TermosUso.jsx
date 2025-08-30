import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  maxHeight: '80vh',     // 🔥 limita altura
  overflowY: 'auto'      // 🔥 adiciona scroll interno
};

export default function TermosUso({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Termos de Uso - Casa de Repouso Elohim
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: '0.8rem' }}
            component="div" // 🔥 permite renderizar HTML estruturado dentro
          >
            <h1 itemProp="name">Termos de Uso e Divulgação de Projetos</h1>
            <p>
              Última atualização:
              <time itemProp="dateModified" dateTime="2025-08-29">
                29/08/2025
              </time>
              —{' '}
              <a
                href="https://www.devdanieljorge.com.br"
                itemProp="url"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.devdanieljorge.com.br
              </a>
            </p>

            <p>
              Bem-vindo ao portfólio de <strong>Daniel Jorge</strong> (“<em>Prestador</em>”). 
              Ao contratar, solicitar orçamento ou utilizar quaisquer serviços disponibilizados neste site, 
              você (“<em>Cliente</em>”) concorda com as condições abaixo.
            </p>

            <h2>1. Direitos de Divulgação</h2>
            <ul>
              <li>
                Todo trabalho, projeto, layout, protótipo, código ou peça produzida pelo Prestador poderá ser utilizado, total ou parcialmente, para:
                <ul>
                  <li>Exibição no portfólio do Prestador (neste site e domínios associados);</li>
                  <li>Publicação em redes sociais, apresentações comerciais e estudos de caso;</li>
                  <li>Veiculação em anúncios, campanhas e materiais de marketing;</li>
                  <li>Demonstrações técnicas em propostas, palestras e entrevistas.</li>
                </ul>
              </li>
              <li>A divulgação não incluirá informações confidenciais, estratégicas ou dados pessoais do Cliente.</li>
            </ul>

            <h2>2. Direitos Autorais e Propriedade Intelectual</h2>
            <ul>
              <li>Conteúdos fornecidos pelo Cliente (textos, imagens, marcas, logotipos etc.) permanecem de titularidade do Cliente.</li>
              <li>Entregáveis produzidos pelo Prestador (código, design, documentação, arte final) são licenciados ao Cliente para uso no escopo do projeto contratado.</li>
              <li>Independentemente da licença concedida ao Cliente, o Prestador mantém o direito de exibir o trabalho para fins de divulgação conforme a cláusula 1.</li>
            </ul>

            <h2>3. Restrições, Exceções e Acordos de Confidencialidade</h2>
            <ul>
              <li>Se o Cliente desejar restringir a divulgação de um projeto específico, essa restrição deverá ser <strong>acordada por escrito</strong> antes do início do trabalho (ex.: NDA/Acordo de Confidencialidade).</li>
              <li>Pedidos de remoção de cases já publicados serão analisados e, quando procedentes, atendidos em prazo razoável.</li>
            </ul>

            <h2>4. Precisão das Informações</h2>
            <ul>
              <li>O Prestador pode editar textos e imagens dos cases para fins de clareza, sem deturpar fatos essenciais.</li>
              <li>Quaisquer marcas e nomes de terceiros exibidos permanecem de seus respectivos proprietários.</li>
            </ul>

            <h2>5. Alterações destes Termos</h2>
            <p>Este documento pode ser atualizado periodicamente. A versão vigente é a publicada nesta página.</p>

            <h2>6. Contato</h2>
            <p>
              Dúvidas ou solicitações:{' '}
              <a href="mailto:danyeljorge@outlook.com">
                danyeljorge@outlook.com
              </a>
            </p>

            <small>
              Ao prosseguir com a contratação, o Cliente concorda com a exibição dos trabalhos desenvolvidos para fins de portfólio, publicidade e demonstração técnica, salvo acordo em contrário formalizado previamente.
            </small>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
