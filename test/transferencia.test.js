const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()

describe('Transferencias', () => {
    describe('POST/transferencias', () => {
        it('Deve retornar 201 com uma mensagem de sucesso quando transferência >= 10 reais', async () => {
            //Capturar token de login
            const respostaLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })
            const token = respostaLogin.body.token;
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })
            expect(resposta.status).to.equal(201);
            console.log(resposta.body);
        });
        it('Deve retornar 402 com uma mensagem de erro quando transferência < 10 reais', async () => {
            //Capturar token de login
            const respostaLogin = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })
            const token = respostaLogin.body.token;
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ""
                })
            expect(resposta.status).to.equal(422);
            console.log(resposta.body);
        });

    });
});