import { Link } from 'react-router';
import { OngoingProject } from '../OngoingProject';

export function OngoingProjectsList() {
    const ongoingProjects = [
        {
            name: 'Plataforma de E-commerce',
            client: 'Startup X',
            status: 'Pagamento parcial',
            value: '$2,500',
        },
        {
            name: 'Website Institucional',
            client: 'Agência Criativa Y',
            status: 'Pago',
            value: '$3,200',
        },
        {
            name: 'Aplicativo Mobile',
            client: 'Loja Virtual Z',
            status: 'Pendente',
            value: '$1,800',
        },
        {
            name: 'Sistema Interno de Gestão',
            client: 'Empresa Tech W',
            status: 'Pagamento parcial',
            value: '$4,000',
        },
        {
            name: 'Landing Page Promocional',
            client: 'Freelancer Independente',
            status: 'Pago',
            value: '$900',
        },
    ];
    return (
        <div className="rounded-xl border shadow-sm p-4">
            <p className="font-semibold text-lg">Projetos em andamento</p>
            <ul>
                {ongoingProjects.map((project) => (
                    <li>
                        <OngoingProject
                            name={project.name}
                            client={project.client}
                            status={project.status}
                            value={project.value}
                        />
                    </li>
                ))}
            </ul>
            <div className="text-right text-blue-500 underline">
                <Link to={'/'}>Ver mais</Link>
            </div>
        </div>
    );
}
