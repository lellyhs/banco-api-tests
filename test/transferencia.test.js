const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao.js');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferencias', () => {
    describe('POST/transferencias', () => {

        let token;

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456');
        });

        it('Deve retornar 201 com uma mensagem de sucesso quando transferência >= 10 reais', async () => {

            const bodyTransferencia = { ...postTransferencias};

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(bodyTransferencia)
            expect(resposta.status).to.equal(201);
            console.log(resposta.body);
        });

        it('Deve retornar 402 com uma mensagem de erro quando transferência < 10 reais', async () => {

            const bodyTransferencia = { ...postTransferencias};
            bodyTransferencia.valor = 7;
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send(bodyTransferencia)
            expect(resposta.status).to.equal(422);
            console.log(resposta.body);
        });

    });
});