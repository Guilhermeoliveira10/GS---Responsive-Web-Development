import React from 'react';
import Layout from '../components/Layout';
import '../styles/custom.css';

const Login: React.FC = () => {
  return (
    <Layout>
      <div className="input-container">
        <div className="login-component card">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Usuário:    
              </label>
              <input
                className="input"
                id="username"
                type="text"
                placeholder="Digite seu usuário"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Senha:     
              </label>
              <input
                className="input"
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="button"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
