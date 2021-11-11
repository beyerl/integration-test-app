export interface IEnvironment {
    title: string,
    domain: string
}

export const Environment: { [key: string]: IEnvironment } = {
    localhost: { title: "Localhost", domain: "https://localhost:44900" },
    localhostIE: { title: "LocalhostIE", domain: "https://localhost:44950" },
    dev: { title: "Dev", domain: "https://dev.ade.adesystem.net" },
    qs: { title: "Qs", domain: "https://qs.ade.adesystem.net" },
    prod: { title: "Prod", domain: "https://beta.ausschreiben.de" }
}