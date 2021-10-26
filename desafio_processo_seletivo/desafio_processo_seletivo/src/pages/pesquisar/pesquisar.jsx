import { Component } from "react";

export default class Pesquisar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome_usuario: "",
            listaRepositorios: [],
            id_rep: 0,
            nome_rep: "",
            descricao_rep: "",
            data_rep: "",
            tamanho_rep: 0
        }
    }

    atualizaEstadoTitulo = async (event) => {
        console.log("Acionou a função de escrever")

        await this.setState({
            nome_usuario: event.target.value
        });

        console.log(this.state.nome_usuario);
    }

    buscarRepositorios = async (event) => {
        event.preventDefault()

        console.log("Vamos buscas os repositorios do usuario: " + this.state.nome_usuario);
        
        fetch(`https://api.github.com/users/${this.state.nome_usuario}/repos`)

        .then(resposta => resposta.json())
        
        .then(dados => this.setState({ listaRepositorios: dados }))
        
        .catch(erro => console.log(erro))
        
        
        await console.log(this.state.listaRepositorios)

    }



    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <section>
                    <h1>Esse é  o pesquisador de repositorios por indivíduo do Github</h1>
                    <form onSubmit={this.buscarRepositorios}>
                        <input onChange={this.atualizaEstadoTitulo} type="text" placeholder="Digite um nome de usuário" />
                        <button type="submit" disable={this.state.nome_usuario === '' ? 'none' : ''}>Pesquisar</button>
                    </form>
                </section>

                <section>
                    <h2>Repositorios de {this.state.nome_usuario}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Data de criação</th>
                                <th>Tamanho</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaRepositorios.map((repositorio) => {
                                    return (
                                        <tr key={repositorio.id}>
                                            <td>{repositorio.id}</td>
                                            <td>{repositorio.name}</td>
                                            <td>{repositorio.description}</td>
                                            <td>{repositorio.created_at}</td>
                                            <td>{repositorio.size}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}