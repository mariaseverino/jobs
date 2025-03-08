import { DialogWrapper } from '../../components/Dialog';
import { ProjectItem } from '../../components/ProjectItem';

export function Projects() {
    return (
        <div className="flex flex-col bg-[#f2fdff]">
            <div className="flex justify-between mb-8 mt-8 md:mt-6">
                <h2 className="text-2xl font-bold">Projetos</h2>
                <button className="px-5 py-1.5 rounded-full font-medium text-sm text-(--primary-color) bg-(--secondary-color)">
                    Novo projeto
                </button>
            </div>
            <div>
                <div className="mb-6">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6 rotate-90"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* <DialogWrapper> */}
                        <li>
                            <ProjectItem
                                title="Sistema Interno de Gestão"
                                status="Pagamento parcial"
                                client="Empresa Tech W"
                                progress="50%"
                            />
                        </li>
                        {/* </DialogWrapper> */}
                        <li>
                            <ProjectItem
                                title="Sistema Interno de Gestão"
                                status="Pagamento parcial"
                                client="Empresa Tech W"
                                progress="50%"
                            />
                        </li>
                        <li>
                            <ProjectItem
                                title="Sistema Interno de Gestão"
                                status="Pagamento parcial"
                                client="Empresa Tech W"
                                progress="50%"
                            />
                        </li>
                        <li>
                            <ProjectItem
                                title="Sistema Interno de Gestão"
                                status="Pagamento parcial"
                                client="Empresa Tech W"
                                progress="50%"
                            />
                        </li>
                        <li>
                            <ProjectItem
                                title="Sistema Interno de Gestão"
                                status="Pagamento parcial"
                                client="Empresa Tech W"
                                progress="50%"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
