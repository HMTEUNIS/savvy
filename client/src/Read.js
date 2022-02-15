import ArticleCard from "./ArticleCard"
import {useState, useEffect} from 'react'
function Read({setter}) {
    const [data, setData] = useState ([])
    const [IDS, setIDS] = useState (1)
    const [searchTerm, setSearch] = useState ("")
    // const [pageNum, setPage] = useState (1)
   
    const handleSearch = (event) => {
        event.preventDefault();
        console.log("search", searchTerm)
        if (searchTerm.length > 1) {
        fetch(`https://core.ac.uk:443/api-v2/articles/search/${searchTerm}?page=1&pageSize=100&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=true&faithfulMetadata=false&apiKey=Fj0UZxKvqogABQV3ncEiNSMreIkGp1bW%20`)
        .then ((res) => res.json())
        .then ((data ) => {
             setData(data)
        })}
    else {console.log("no dice")} 
    console.log("data",data)}

    // const nextPage = (e) => {
    //     e.preventDefault()
    //     setPage(pageNum + 1)
    //         console.log("search", searchTerm)
    //         if (searchTerm.length > 1) {
    //         fetch(`https://core.ac.uk:443/api-v2/articles/search/${searchTerm}page=${pageNum}&pageSize=100&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=true&faithfulMetadata=false&apiKey=Fj0UZxKvqogABQV3ncEiNSMreIkGp1bW%20`)
    //         .then ((res) => res.json())
    //         .then ((data ) => {
    //              setData(data)
    //         })}
    //     else {console.log("no dice")} console.log("data",data)}
    
    //     const previousPage = (e) => {
    //         e.preventDefault()
    //         setPage(pageNum - 1)
    //             console.log("search", searchTerm)
    //             if (searchTerm.length > 1) {
    //             fetch(`https://core.ac.uk:443/api-v2/articles/search/${searchTerm}?page=${pageNum}&pageSize=100&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=true&faithfulMetadata=false&apiKey=Fj0UZxKvqogABQV3ncEiNSMreIkGp1bW%20`)
    //             .then ((res) => res.json())
    //             .then ((data ) => {
    //                  setData(data)
    //             })}
    //         else {console.log("no dice")} console.log("data",data)}

    // dummy data
// 
// let data= {
//     "status": "OK",
//     "totalHits": 11,
//     "data": [
//         {
//             "id": "478981268",
//             "authors": [
//                 "SUNY College of Environmental Science and Forestry"
//             ],
//             "contributors": [],
//             "datePublished": "1995-12-06T08:00:00",
//             "description": "The mission of The Knothole publication is to provide its readers with writings that are both stimulating and contemporary; to inform its students of clubs, events, and off-campus happenings; to challenge a world driven by progress to uncover the truth about current environmental policies and innovations; and to express such ideas, ingeniously and collectively.https://digitalcommons.esf.edu/knothole/1652/thumbnail.jp",
//             "identifiers": [
//                 "oai:digitalcommons.esf.edu:knothole-1652",
//                 null
//             ],
//             "language": {
//                 "code": "en",
//                 "id": 9,
//                 "name": "English"
//             },
//             "publisher": "Digital Commons @ ESF",
//             "relations": [],
//             "repositories": [
//                 {
//                     "id": "11838",
//                     "openDoarId": 0,
//                     "name": "SUNY College of Environmental Science and Forestry: Digital Commons @ ESF (State University of New York)",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1634893211000,
//                 "metadataUpdated": 1641817512000,
//                 "depositedDate": 1629403563000
//             },
//             "subjects": [
//                 "text"
//             ],
//             "title": "Knothole December 6, 1995 Vol 48 No 13",
//             "topics": [
//                 "student newspaper",
//                 "student writing",
//                 "campus life",
//                 "Communication",
//                 "Creative Writing",
//                 "Environmental Studies"
//             ],
//             "types": [],
//             "year": 1995,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/478981268.pdf",
//                 "https://core.ac.uk/display/478981268",
//                 "https://digitalcommons.esf.edu/knothole/649",
//                 "https://digitalcommons.esf.edu/cgi/viewcontent.cgi?article=1652&amp;context=knothole"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/478981268.pdf",
//             "oai": "oai:digitalcommons.esf.edu:knothole-1652",
//             "downloadUrl": "https://core.ac.uk/download/478981268.pdf"
//         },
//         {
//             "id": "267181826",
//             "authors": [
//                 "Schlissel, Matthew Jay"
//             ],
//             "contributors": [],
//             "datePublished": "2015-04-01T07:00:00",
//             "identifiers": [
//                 "oai:digitalcommons.lmu.edu:etd-1165",
//                 null
//             ],
//             "language": {
//                 "code": "en",
//                 "id": 9,
//                 "name": "English"
//             },
//             "publisher": "Digital Commons at Loyola Marymount University and Loyola Law School",
//             "relations": [],
//             "repositories": [
//                 {
//                     "id": "3596",
//                     "openDoarId": 0,
//                     "name": "Loyola Marymount University",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1576288617000,
//                 "metadataUpdated": 1641048346000,
//                 "depositedDate": 1432323819000
//             },
//             "subjects": [
//                 "text"
//             ],
//             "title": "The Senator\\u27s Wife",
//             "topics": [
//                 "Film and Media Studies",
//                 "Screenwriting"
//             ],
//             "types": [],
//             "year": 2015,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/267181826.pdf",
//                 "https://core.ac.uk/display/267181826",
//                 "https://digitalcommons.lmu.edu/etd/161",
//                 "https://digitalcommons.lmu.edu/cgi/viewcontent.cgi?article=1165&amp;context=etd"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/267181826.pdf",
//             "oai": "oai:digitalcommons.lmu.edu:etd-1165",
//             "downloadUrl": "https://core.ac.uk/download/267181826.pdf"
//         },
//         {
//             "id": "71013151",
//             "authors": [
//                 "Vázquez Hermosilla, Mª Sandra"
//             ],
//             "contributors": [
//                 "Santaemilia Ruiz, José",
//                 "Departament de Filologia Anglesa i Alemanya"
//             ],
//             "datePublished": "2013-01-01T00:00:00",
//             "description": "Esta tesis doctoral analiza el fenómeno del sexismo lingüístico indirecto y la negociación de las (des)igualdades de género en textos socio-ideológico virtuales (foros de discusión online) asociados a discursos institucionales (revistas online [Cosmopolitan y Men´s Health]) dirigidas a comunidades de práctica concretas (hombres y mujeres [heterosexuales] del Reino Unido consumidores y participantes de estos discursos). \n\nEste proyecto, por tanto, se enmarca dentro de una de las ramas de los estudios feministas de género y lenguaje, más concretamente, la rama en la que se estudian el análisis lingüístico y discursivo de las representaciones y negociaciones de género. Pese a que somos conscientes de que el sexismo lingüístico se puede encontrar en todos los ámbitos de nuestra vida privada y pública, consideramos que la construcción discursiva de las identidades sociales en Internet nos puede permitir desvelar manifestaciones modernas, reales y actualizadas de este fenómeno en lengua inglesa, la cual, por otro lado, puede considerarse una importante lingua franca mundial aparte de una de las lenguas más representativas en el ciberespacio.   \n\nNuestro objetivo principal en esta investigación es el análisis del fenómeno del sexismo lingüístico indirecto (Mills 2008) desde una perspectiva pragmático-discursiva propia de la tercera ola feminista y de las corrientes actuales dentro de los estudios feministas de género y lenguaje. \n\nPara ello, se utiliza un corpus de cerca de 2.500.000 de palabras extraído de dos foros de discusión online adscritos a dos revistas de gran impacto dentro del mercado de las publicaciones dirigidas a hombres y mujeres. El análisis de este fenómeno lingüístico-ideológico-discursivo en este determinado corpus nos permite, además, abordar objetivos más específicos, concretamente:\n\n\n\n1)\tPerfilar el concepto de sexismo lingüístico en un entorno que consideramos especialmente relevante en cuanto a la construcción de identidades en la sociedad actual. Consideramos que un análisis localizado enmarcado dentro del modelo de comunidad de práctica nos puede permitir estudiar qué es o cómo se define este fenómeno en este contexto determinado además de ayudarnos a identificar dónde y cómo surge el mismo en situaciones comunicativas concretas.\n\n\n\n2)\tAnalizar manifestaciones concretas del fenómeno del sexismo lingüístico indirecto, considerado como la manifestación más amplia y dañina del fenómeno, que podemos encontrar tanto en los discursos institucionales como en los locales en lengua inglesa, posiblemente la lengua más visible a nivel mundial y virtual.\n\n\n\n3)\tCatalogar las manifestaciones del fenómeno del sexismo lingüístico indirecto en espacios virtuales. Pese a que Mills (2008) presenta una completa y detallada clasificación de lo que podrían considerarse las manifestaciones más relevantes de este fenómeno, consideramos que la aplicación práctica de este modelo en un corpus de características tan concretas puede llevarnos a encontrar o perfilar nuevas categorías del fenómeno del sexismo lingüístico indirecto propias y relevantes en el contexto de la comunicación en espacios virtuales mediante medios tecnológicos.\n\n\n\n4)\tEstudiar las repercusiones del uso del sexismo lingüístico indirecto a nivel institucional (revistas online) en el mantenimiento o (re)creación de estereotipos o ideologías de género en comunidades de práctica concretas asociadas a esos discursos institucionales (foros de interacción virtual). De este modo se podrá comprobar si los discursos presentes a nivel institucional son re-creados y mantenidos por las comunidades de práctica seguidoras de ese discurso así como comprobar si los medios y manifestaciones utilizados para crear ese discurso son los mismos o diferentes a nivel local. Además, esto nos permite estudiar el impacto del sexismo lingüístico indirecto desde una visión globalizadora e inclusiva ya que se estudia en relación a las mujeres pero también a los hombres (New Lad, New Man– Benwell 2007) plasmando de este modo un amplio espectro de estereotipos y lenguaje que denigra y perjudica a ambos sexos.\n\n\n\nLa metodología utilizada en esta tesis para llevar a cabo los objetivos establecidos anteriormente es el CMDA (Computer-Mediated Discourse Analysis) propuesto por Herring (2004) combinado con el paradigma del FCDA (Feminist Critial Discourse Analysis) (Lazar 2005, 2007). Las características intrínsecas de nuestro corpus y la naturaleza del fenómeno que se analiza en esta tesis nos exigen un tipo de análisis que vaya más allá de lo puramente lingüístico. Por un lado, los espacios virtuales y los textos online exigen, por decirlo de alguna manera, un acercamiento desde el punto de vista de la multimodalidad (Kress & Van Leeuwen 2001), es decir, de la construcción del significado atendiendo a diversos aspectos como la lengua, las imágenes (estáticas o en movimiento), los efectos visuales, las estrategias tipográficas, los sonidos y efectos sonoros, etc. Por otro lado, el fenómeno del sexismo lingüístico indirecto, por su naturaleza sutil y dinámica deber ser abordado desde una perspectiva crítica que abarque aspectos discursivos y pragmáticos. El CMDA puede ser definido como un enfoque más que una metodología, como un set de herramientas o lentes teóricas a través de las cuales los investigadores pueden hacer observaciones e interpretar los resultados de sus investigaciones empíricas (Herring 2004). Este enfoque metodológico está divido en cinco pasos:\n\n\n\n1)\t Establecimiento de las preguntas de investigación e hipótesis que guiarán el estudio. En nuestro caso: i) ¿Cómo se manifiesta y se negocia el fenómeno del sexismo lingüístico indirecto en el discurso de los foros de discusión online adscritos a revistas de impacto online dirigidas a hombres y mujeres? y ii) ¿Puede el modelo de Mills (2008) de sexismo lingüístico indirecto aplicarse al entorno concreto donde desarrollamos nuestra investigación o, por el contrario, deben agregarse o eliminarse determinadas categorías atendiendo a las especificidades del contexto?\n\n\n\n2)\tSelección y descripción del corpus concreto donde se llevará a cabo la investigación empírica para poder responder a las preguntas de investigación concretas y verificar o negar las hipótesis de partida. Nuestro corpus consiste en cerca de 2.500.000 de palabras extraídas de dos foros de discusión online adscritos a dos revistas de impacto dirigidas a hombres y mujeres, Men´s Health y Cosmopolitan.  \n\n\n\n3)\tOperacionalización de los conceptos clave de la investigación. En nuestro caso se define con precisión el fenómeno del sexismo lingüístico indirecto así como sus manifestaciones más relevantes siguiendo el modelo propuesto por Mills (2008).\n\n \n\n4)\tSelección y aplicación de un método de análisis concreto. Debido a la naturaleza del corpus y las características pragmático-discursivas del fenómeno que pretendemos estudiar consideramos que la utilización del FCDA (Feminist Critical Discourse Analysis) nos permite afrontar nuestros objetivos generales y preguntas de investigación concretas desde una perspectiva adecuada. Este paradigma, tiene como base el CDA (Critical Discourse Analisis) el cual no tiene una descripción sistemática de herramientas para hacer un análisis delimitado de los corpora. Éste es un paradigma que está basado en la filosofía, en el análisis de la construcción de identidades en el discurso y la negociación de las relaciones de poder y su relación con la ideología, la sociedad y la cultura desde una perspectiva feminista (Lazar 2005, 2007; Lehtonen 2007; Marling 2010)\n\n\n\n5)\tInterpretación de los resultados. En este último paso, tanto las conclusiones generales extraídas del trabajo, como las respuestas concretas a las preguntas de investigación, como una mirada hacia el futuro son tenidos en cuenta. Estos tres niveles de interpretación, a su vez, se llevan a cabo atendiendo tanto a los factores del medio y sociales concretos del estudio realizado.\n\n\n\nLos resultados principales de esta investigación se estructuran en torno a las dos preguntas de investigación que la vertebran. Por un lado, en cuanto a la primera pregunta de investigación, se concluye que las principales manifestaciones del fenómeno del sexismo lingüístico en nuestro corpus se dan atendiendo a tres categorías: a) la presencia anecdótica de casos de sexismo lingüístico directo con una clara intencionalidad sexista, ii) la presencia de formas de sexismo directo enmarcadas dentro de formas evasivas y generalmente con tono humorístico, y iii) la presencia de sexismo mediante formas discursivas indirectas. Tal y como se manifiesta en las hipótesis de partida de esta investigación, es la tercera categoría la que resulta más prominente en nuestro corpus debido a la influencia del discurso institucional sobre el local, el cual mimetiza las formas aceptadas como políticamente correctas en el marco más amplio. Del mismo modo, también vaticinamos, y posteriormente corroboramos, que dichas formas de sexismo indirecto estarían sujetas a diversos procesos de negociación dentro de situaciones comunicativas concretas, en este caso, dichas formas indirectas en nuestro corpus pueden: i) pasar inadvertidas, ii) ser aceptadas, iii) ser desafiadas mediante ataques directos, o iv) ser desafiadas mediantes formas indirectas. \n\nEn cuanto a nuestra segunda pregunta de investigación, este estudio concluye que, efectivamente, el modelo de Mills (2008) de sexismo lingüístico indirecto es aplicable a nuestro corpus y, por tanto, resulta útil para analizar esta forma concreta de comunicación virtual. Sin embargo, pese a que las seis categorías de sexismo indirecto presentadas por Mills –humor, presuposiciones, guiones y metáforas, colocaciones y perspectiva androcéntrica–  pueden ser identificadas en nuestro corpus, dos de ellas –humor y presuposiciones– resultan más relevantes debido a determinados factores sociales y del medio. Además, de nuestro análisis se deriva la necesidad de adaptar o perfilar el modelo de Mills (2008) al entorno analizado en este estudio y, por ello, se propone que la categoría de multimodalidad debería ser incluida en el modelo de sexismo lingüístico indirecto para lenguaje utilizado en entornos virtuales. \n\nFinalmente esta investigación sugiere que futuros estudios en torno al fenómeno del sexismo lingüístico y el contexto de la comunicación virtual deberían tener en cuenta aspectos como el desarrollo de la noción y el análisis de la multimodalidad, la necesidad de delimitar las especificidades del medio, la relevancia de presentar estudios diacrónicos sobe un determinado fenómeno y contexto, así como los beneficios de la combinación de métodos cuantitativos y cualitativos. \n\nCon todo ello, este trabajo es una clara invitación a la continuidad de trabajo dentro de los estudios feministas de género y lenguaje, el fenómeno del sexismo lingüístico y el entorno de la comunicación virtual debido a la importancia de los mismos para la evolución humana en nuestra sociedad actual",
//             "identifiers": [
//                 "oai:roderic.uv.es:10550/29144",
//                 null
//             ],
//             "relations": [],
//             "repositories": [
//                 {
//                     "id": "1989",
//                     "openDoarId": 0,
//                     "name": "Repositori d'Objectes Digitals per a l'Ensenyament la Recerca i la Cultura",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1479731830000,
//                 "metadataUpdated": 1640794635000,
//                 "depositedDate": 1373670000000
//             },
//             "subjects": [
//                 "info:eu-repo/semantics/doctoralThesis"
//             ],
//             "title": "I bought my son an iPad and my daughter and iPod. The wife got me an iPhone and I got her an iRon. Indirect linguistic sexism in computer-mediated communication: an analysis of Cosmopolitan and Men´s Health´s online forums",
//             "topics": [
//                 "lengua y cultura",
//                 "comunicaciones sociales",
//                 "estudios feministas de género y lenguaje",
//                 "lengua y literatura",
//                 "lingüística aplicada",
//                 "UNESCO::LINGÜÍSTICA::Lingüística aplicada",
//                 "UNESCO::LINGÜÍSTICA::Lingüística aplicada::Otras"
//             ],
//             "types": [],
//             "year": 2013,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/71013151.pdf",
//                 "https://core.ac.uk/display/71013151",
//                 "http://hdl.handle.net/10550/29144"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/71013151.pdf",
//             "oai": "oai:roderic.uv.es:10550/29144",
//             "downloadUrl": "https://core.ac.uk/download/71013151.pdf"
//         },
//         {
//             "id": "286682320",
//             "authors": [
//                 "Kulanthaivel, Anand"
//             ],
//             "contributors": [
//                 "Jones, Josette F.",
//                 "Milojevic, Stasa",
//                 "Lammert, Craig S.",
//                 "Wild, David J."
//             ],
//             "datePublished": "2019-12-01T00:00:00",
//             "description": "Indiana University-Purdue University Indianapolis (IUPUI)Autoimmune Hepatitis (AIH), an incurable chronic condition of unknown cause where\r\nthe body attacks its own liver, is a rare disease, with a current diagnosed worldwide prevalence of\r\n< 150,000. Inadequately treated, AIH can cause progressive liver damage and ultimately liver\r\nfailure. A wide variety of symptoms are associated with AIH including severe fatigue, joint pain,\r\ndepression, anxiety, and insomnia.\r\nWhile precision medicine’s genomics has attempted to shed light on the disease, other\r\nnon-molecular “-omics” approaches can be taken in studying AIH patients, who often utilize\r\nsocial media to gather information from other patients or care providers to apply to their own AIH\r\ndisease course. It is proposed that these patient-generated social mediomes can create self-report\r\nhealth records for patients – and facets of their lives - otherwise unreachable by conventional\r\nresearch.\r\nIn this feasibility study, I examined in an exploratory fashion the social mediome of a\r\nlarge (N > 1000) gathering of AIH patients and caregivers as present on a Facebook Group to\r\ndetermine the potential of mining various types health-related user information. The following\r\ntypes of information were mined, with feasible indicating a reliability of F >= 0.670:\r\n1) Types of health information shared and structures of information sharing (Feasible)\r\n2) Types and directionality of support provided by and to users (Portions feasible)\r\n3) Clinical factors (AIH-related and otherwise) disclosed by users\r\na. Medication intake (Feasible)\r\nb. Signs and symptoms (including pain and injury) and diagnosed comorbidities\r\n(Portions feasible)\r\nc. Results of disease monitoring blood tests (Portions feasible)\r\n4) Contextual (non-clinical; environmental; social) factors disclosed by users (Detection of\r\nwhich type of factor discussed occasionally feasible).\r\nThe resulting knowledge is required to adequately describe the disease not only clinically, but\r\nalso environmentally and socially, and will form part of the basis for future disease studies",
//             "identifiers": [
//                 "oai:scholarworks.iupui.edu:1805/21932",
//                 null
//             ],
//             "language": {
//                 "code": "en",
//                 "id": 9,
//                 "name": "English"
//             },
//             "relations": [],
//             "repositories": [
//                 {
//                     "id": "1651",
//                     "openDoarId": 0,
//                     "name": "IUPUIScholarWorks",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1580457604000,
//                 "metadataUpdated": 1640623468000,
//                 "depositedDate": 1580397550000
//             },
//             "subjects": [
//                 "Dissertation"
//             ],
//             "title": "Studying Rare Patients with Commonly-Available Information: Social Mediomics for Researching Patient Histories in Autoimmune Hepatitis (AIH)",
//             "topics": [
//                 "Autoimmune Hepatitis",
//                 "Consumer Health Informatics",
//                 "Natural Language Processing",
//                 "Population Health Informatics",
//                 "Rare Disease",
//                 "Social Media"
//             ],
//             "types": [],
//             "year": 2019,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/286682320.pdf",
//                 "https://core.ac.uk/display/286682320",
//                 "http://hdl.handle.net/1805/21932"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/286682320.pdf",
//             "oai": "oai:scholarworks.iupui.edu:1805/21932",
//             "downloadUrl": "https://core.ac.uk/download/286682320.pdf"
//         },
//         {
//             "id": "161947435",
//             "authors": [
//                 "Mulligan, Catherine"
//             ],
//             "contributors": [],
//             "datePublished": "1989-01-01T00:00:00",
//             "identifiers": [
//                 "oai:kb.osu.edu:1811/86544",
//                 null
//             ],
//             "publisher": "Ohio Council of Teachers of Mathematics",
//             "relations": [],
//             "repositories": [
//                 {
//                     "id": "181",
//                     "openDoarId": 0,
//                     "name": "KnowledgeBank at OSU",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1546500948000,
//                 "metadataUpdated": 1641902933000,
//                 "depositedDate": 1538746145000
//             },
//             "subjects": [
//                 "Article"
//             ],
//             "title": "Magic Trick in Honor of the Class of '89",
//             "topics": [],
//             "types": [],
//             "year": 1989,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/161947435.pdf",
//                 "https://core.ac.uk/display/161947435",
//                 "http://hdl.handle.net/1811/86544"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/161947435.pdf",
//             "oai": "oai:kb.osu.edu:1811/86544",
//             "downloadUrl": "https://core.ac.uk/download/161947435.pdf"
//         },
//         {
//             "id": "440321600",
//             "authors": [
//                 "Jones, Keenan",
//                 "Nurse, Jason R. C.",
//                 "Li, Shujun"
//             ],
//             "contributors": [],
//             "datePublished": "2021-05-07T00:00:00",
//             "description": "Emojis have established themselves as a popular means of communication in\nonline messaging. Despite the apparent ubiquity in these image-based tokens,\nhowever, interpretation and ambiguity may allow for unique uses of emojis to\nappear. In this paper, we present the first examination of emoji usage by\nhacktivist groups via a study of the Anonymous collective on Twitter. This\nresearch aims to identify whether Anonymous affiliates have evolved their own\napproach to using emojis. To do this, we compare a large dataset of Anonymous\ntweets to a baseline tweet dataset from randomly sampled Twitter users using\ncomputational and qualitative analysis to compare their emoji usage. We utilise\nWord2Vec language models to examine the semantic relationships between emojis,\nidentifying clear distinctions in the emoji-emoji relationships of Anonymous\nusers. We then explore how emojis are used as a means of conveying emotions,\nfinding that despite little commonality in emoji-emoji semantic ties, Anonymous\nemoji usage displays similar patterns of emotional purpose to the emojis of\nbaseline Twitter users. Finally, we explore the textual context in which these\nemojis occur, finding that although similarities exist between the emoji usage\nof our Anonymous and baseline Twitter datasets, Anonymous users appear to have\nadopted more specific interpretations of certain emojis. This includes the use\nof emojis as a means of expressing adoration and infatuation towards notable\nAnonymous affiliates. These findings indicate that emojis appear to retain a\nconsiderable degree of similarity within Anonymous accounts as compared to more\ntypical Twitter users. However, their are signs that emoji usage in Anonymous\naccounts has evolved somewhat, gaining additional group-specific associations\nthat reveal new insights into the behaviours of this unusual collective.Comment: 10 pages, 1 figure, 7 table",
//             "identifiers": [
//                 "oai:arXiv.org:2105.03168",
//                 "10.36190/2021.04"
//             ],
//             "language": {
//                 "code": "en",
//                 "id": 9,
//                 "name": "English"
//             },
//             "relations": [],
//             "repositories": [
//                 {
//                     "id": "144",
//                     "openDoarId": 0,
//                     "name": "arXiv.org e-Print Archive",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1624489332000,
//                 "metadataUpdated": 1624489332000,
//                 "depositedDate": 1624316400000
//             },
//             "subjects": [
//                 "text"
//             ],
//             "title": "The Shadowy Lives of Emojis: An Analysis of a Hacktivist Collective's\n  Use of Emojis on Twitter",
//             "topics": [
//                 "Computer Science - Computation and Language",
//                 "Computer Science - Machine Learning"
//             ],
//             "types": [],
//             "year": 2021,
//             "fulltextUrls": [
//                 "https://core.ac.uk/display/440321600",
//                 "http://arxiv.org/abs/2105.03168"
//             ],
//             "fulltextIdentifier": "http://arxiv.org/abs/2105.03168",
//             "doi": "10.36190/2021.04",
//             "oai": "oai:arXiv.org:2105.03168",
//             "downloadUrl": "http://arxiv.org/abs/2105.03168"
//         },
//         {
//             "id": "161947492",
//             "authors": [
//                 "Liechty, Emily"
//             ],
//             "contributors": [],
//             "datePublished": "1989-01-01T00:00:00",
//             "identifiers": [
//                 "oai:kb.osu.edu:1811/86551",
//                 null
//             ],
//             "publisher": "Ohio Council of Teachers of Mathematics",
//             "relations": [],
//             "repositories": [
//                 {
//                     "id": "181",
//                     "openDoarId": 0,
//                     "name": "KnowledgeBank at OSU",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1546501002000,
//                 "metadataUpdated": 1641169024000,
//                 "depositedDate": 1538747113000
//             },
//             "subjects": [
//                 "Article"
//             ],
//             "title": "Helppp ......",
//             "topics": [],
//             "types": [],
//             "year": 1989,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/161947492.pdf",
//                 "https://core.ac.uk/display/161947492",
//                 "http://hdl.handle.net/1811/86551"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/161947492.pdf",
//             "oai": "oai:kb.osu.edu:1811/86551",
//             "downloadUrl": "https://core.ac.uk/download/161947492.pdf"
//         },
//         {
//             "id": "426872024",
//             "authors": [
//                 "Jones, Keenan",
//                 "Nurse, Jason R. C.",
//                 "Li, Shujun"
//             ],
//             "contributors": [],
//             "description": "Emojis have established themselves as a popular means of communication in online messaging. Despite the apparent ubiquity in these image-based tokens, however, interpretation and ambiguity may allow for unique uses of emojis to appear. In this paper, we present the first examination of emoji usage by hacktivist groups via a study of the Anonymous collective on Twitter. This research aims to identify whether Anonymous affiliates have evolved their own approach to using emojis. To do this, we compare a large dataset of Anonymous tweets to a baseline tweet dataset from randomly sampled Twitter users using computational and qualitative analysis to compare their emoji usage. We utilise Word2Vec language models to examine the semantic relationships between emojis, identifying clear distinctions in the emoji-emoji relationships of Anonymous users. We then explore how emojis are used as a means of conveying emotions, finding that despite little commonality in emoji-emoji semantic ties, Anonymous emoji usage displays similar patterns of emotional purpose to the emojis of baseline Twitter users. Finally, we explore the textual context in which these emojis occur, finding that although similarities exist between the emoji usage of our Anonymous and baseline Twitter datasets, Anonymous users appear to have adopted more specific interpretations of certain emojis. This includes the use of emojis as a means of expressing adoration and infatuation towards notable Anonymous affiliates. These findings indicate that emojis appear to retain a considerable degree of similarity within Anonymous accounts as compared to more typical Twitter users. However, their are signs that emoji usage in Anonymous accounts has evolved somewhat, gaining additional group-specific associations that reveal new insights into the behaviours of this unusual collective",
//             "identifiers": [
//                 "oai:kar.kent.ac.uk:87962",
//                 null
//             ],
//             "relations": [
//                 "http://emoji2021.aiisc.ai/"
//             ],
//             "repositories": [
//                 {
//                     "id": "57",
//                     "openDoarId": 0,
//                     "name": "Kent Academic Repository",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1620739878000,
//                 "metadataUpdated": 1641151782000,
//                 "depositedDate": 1620632364000
//             },
//             "subjects": [
//                 "HM",
//                 "QA76",
//                 "T"
//             ],
//             "title": "The Shadowy Lives of Emojis: An Analysis of a Hacktivist Collective's Use of Emojis on Twitter",
//             "topics": [
//                 "HM",
//                 "QA76",
//                 "T"
//             ],
//             "types": [],
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/426872024.pdf",
//                 "https://core.ac.uk/display/426872024",
//                 "https://kar.kent.ac.uk/87962/1/ICWSM_21_Emoji_preprint.pdf"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/426872024.pdf",
//             "oai": "oai:kar.kent.ac.uk:87962",
//             "downloadUrl": "https://core.ac.uk/download/426872024.pdf"
//         },
//         {
//             "id": "43718322",
//             "authors": [
//                 "Kong, Lingpeng",
//                 "Schneider, Nathan",
//                 "Swayamdipta, Swabha",
//                 "Bhatia, Archna",
//                 "Dyer, Chris",
//                 "Smith, Noah A."
//             ],
//             "contributors": [],
//             "datePublished": "2014-10-01T00:00:00",
//             "identifiers": [
//                 "oai:pure.ed.ac.uk:publications/d25fa1ed-3cb4-4281-9f8c-46b371df433a",
//                 null
//             ],
//             "relations": [],
//             "repositories": [
//                 {
//                     "id": "647",
//                     "openDoarId": 0,
//                     "name": "Edinburgh Research Explorer",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1470741481000,
//                 "metadataUpdated": 1640156788000,
//                 "depositedDate": 1534028400000
//             },
//             "subjects": [
//                 "contributionToPeriodical"
//             ],
//             "title": "A Dependency Parser for Tweets",
//             "topics": [],
//             "types": [],
//             "year": 2014,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/43718322.pdf",
//                 "https://core.ac.uk/display/43718322",
//                 "https://www.pure.ed.ac.uk/ws/files/24357302/twparser.pdf",
//                 "http://hdl.handle.net/20.500.11820/d25fa1ed-3cb4-4281-9f8c-46b371df433a",
//                 "http://www.aclweb.org/anthology/D14-1108",
//                 "https://www.research.ed.ac.uk/en/publications/d25fa1ed-3cb4-4281-9f8c-46b371df433a"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/43718322.pdf",
//             "doi": "10.3115/v1/d14-1108",
//             "oai": "oai:pure.ed.ac.uk:publications/d25fa1ed-3cb4-4281-9f8c-46b371df433a",
//             "downloadUrl": "https://core.ac.uk/download/43718322.pdf"
//         },
//         {
//             "id": "35338628",
//             "authors": [
//                 "Marantika, Riky",
//                 "Susetyo, Susetyo",
//                 "Utomo, Padi"
//             ],
//             "contributors": [],
//             "datePublished": "2014-01-01T00:00:00",
//             "description": "Permasalahan dalam penelitian ini adalah bagaimana proses Peningkatan kemampuan Menulis Paragraf Argumentasi  melalui Jejaring Sosial Facebook Siswa Kelas XI  TKJ Sekolah Menengah Kejuruan (SMK) Negeri 3  Kota Bengkulu  Tahun Ajaran 2012/2013. Penelitian ini adalah Penelitian Tindakan Kelas (PTK). Subjek penelitian dalam penelitian ini adalah siswa Kelas XI  TKJ Sekolah Menengah Kejuruan (SMK) Negeri 3  Kota Bengkulu  Tahun Ajaran 2012/2013 yang berjumlah 36 orang. Penelitian ini terdiri dari dua siklus, yang masing-masing terdiri dari: (1) perencanaan, (2) pelaksanaan tindakan, (3) pengamatan, (4) refleksi. Hasil penelitian tindakan kelas siklus I menunjukan, ketuntasan belajar sebesar 54,29%, berarti pada siklus I siswa belum mencapai ketuntasan klasikal yang ditetapkan (75%), hal ini karena masih ada siswa yang kurang fokus karena dan cendrung asyik bermain facebook sendiri . Pada siklus II, guru memberikan penekanan untuk lebih fokus  dalam Menulis Paragraf Argumentasi  Melalui Jejaring Sosial Facebook, Sehingga pada siklus II ketuntasan klasikal menjadi 83,33%. Nilai rata-rata prestasi belajar pada siklus I 69,19% pada siklus II mengalami peningkatan menjadi 78,94%. Daya serap klasikal juga mengalami peningkatan yaitu dari 69,19% menjadi 78,94%. Peningkatan ini tampak dari proses pembelajaran dan aktivitas kegiatan siswa yang lebih aktif, fokus  dan lebih bersemangat. Dengan demikian, dapat disimpulkan dengan pembelajaran  melalui Jejaring Sosial Facebook guru dapat mengkondisikan kelas dengan baik lisan maupun online, siswa lebih leluasa dengan fasilitas facebook tanpa merasa takut serta siswa lebih bersemangat dalam memberikan ide maupun gagasan secara aktif dalam media tulisan menggunakan facebook",
//             "identifiers": [
//                 "oai:repository.unib.ac.id:8584",
//                 null
//             ],
//             "relations": [
//                 "http://repository.unib.ac.id/8584/"
//             ],
//             "repositories": [
//                 {
//                     "id": "891",
//                     "openDoarId": 0,
//                     "name": "UNIB Scholar Repository",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1463816744000,
//                 "metadataUpdated": 1640167916000,
//                 "depositedDate": 1411426800000
//             },
//             "subjects": [
//                 "Thesis",
//                 "NonPeerReviewed"
//             ],
//             "title": "PENINGKATAN KEMAMPUAN MENULIS PARAGRAF ARGUMENTASI  MELALUI JEJARING SOSIAL FACEBOOK SISWA KELAS XI  TKJ SEKOLAH MENENGAH KEJURUAN (SMK) NEGERI 3  KOTA BENGKULU   TAHUN AJARAN 2012/2013",
//             "topics": [
//                 "L Education (General)"
//             ],
//             "types": [],
//             "year": 2014,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/35338628.pdf",
//                 "https://core.ac.uk/display/35338628",
//                 "http://repository.unib.ac.id/8584/",
//                 "http://repository.unib.ac.id/8584/2/V%2CV%2CLAMP%2CI-14-rik-FK.pdf",
//                 "http://repository.unib.ac.id/8584/1/I%2CII%2CIII%2CI-14-rik-FK.pdf"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/35338628.pdf",
//             "oai": "oai:repository.unib.ac.id:8584",
//             "downloadUrl": "https://core.ac.uk/download/35338628.pdf"
//         },
//         {
//             "id": "268879059",
//             "authors": [
//                 "Mahmoud, Dehghanharati"
//             ],
//             "contributors": [],
//             "datePublished": "2017-07-01T00:00:00",
//             "description": "This thesis focuses on the character analysis of Pak Dogol and Wak Long as clowns in wayang kulit Kelantan. The three objectives of this thesis are: 1) to explore the significance of the two clown characters, Pak Dogol and Wak Long, in wayang kulit Kelantan with focus on their myth origin, their role in wayang kulit stories and performances; 2) to investigate the characterization of Pak Dogol and Wak Long by exploring their visual features and possible origin with focus on their comic features; and 3) to investigate the comic qualities of these two characters as well as the comic methods used in wayang kulit Kelantan. Based on the objectives, the analysis of these two clown characters is done in four main aspects. The first is their significant and conventional definitions and myth origin both inside and outside of wayang kulit Kelantan. The second is the detailed analysis of the visual aspects of these characters as solely presented in their puppets in the wayang kulit Kelantan. The third aspect is the role of Pak Dogol and Wak Long in five selected stories and one wayang kulit performance script. In this aspect, the different roles of these clowns are explained in the stories and comic features in selected texts. Finally, the comic features of Pak Dogol and Wak Long is explained in the three recorded wayang kulit performances. However, four theories are applied in this thersis, these are, A- direct and indirect charactrization. B- Bakhtin theory of ggrotesque. C- postmodernism. D- interculaturalism. E- Bergson theory of comedy. In brief, Pak Dogol’s character as the main clown with a noble and divine origin is recognized by dalangs (puppeteers) who also consider him as a god-clown. His character is represented by a puppet with an ugly and exaggerated body shape which improves his clowning characteristic as well. In the selected stories, Pak Dogol takes on many roles such as a servant, guarder of other main characters such as Siti Dewi, consoler of Seri Rama and a clown with supernatural powers who can solve difficult problems. Moreover, Pak Dogol also provides situation comedy where necessary. Wak Long is the second clown character and loyal companion of Pak Dogol. Wak Long also is considered as a dignified and noble character by dalangs but still inferior to Pak Dogol. On the other hand, Wak Long’s character provides more comic features than Pak Dogol, especially in case of character and behavior comedy. Visually, Wak Long’s puppet design is similar to Pak Dogol but without as much exaggeration",
//             "identifiers": [
//                 "oai:studentsrepo.um.edu.my:7837",
//                 null
//             ],
//             "relations": [
//                 "http://studentsrepo.um.edu.my/7837/"
//             ],
//             "repositories": [
//                 {
//                     "id": "896",
//                     "openDoarId": 0,
//                     "name": "University of Malaya Students Repository",
//                     "urlHomepage": null,
//                     "urlOaipmh": null,
//                     "uriJournals": null,
//                     "physicalName": "noname",
//                     "source": null,
//                     "software": null,
//                     "metadataFormat": null,
//                     "description": null,
//                     "journal": null,
//                     "roarId": 0,
//                     "baseId": 0,
//                     "pdfStatus": null,
//                     "nrUpdates": 0,
//                     "disabled": false,
//                     "lastUpdateTime": null,
//                     "repositoryLocation": null
//                 }
//             ],
//             "repositoryDocument": {
//                 "pdfStatus": 1,
//                 "metadataAdded": 1576403127000,
//                 "metadataUpdated": 1640167689000,
//                 "depositedDate": 1508913986000
//             },
//             "subjects": [
//                 "Thesis",
//                 "NonPeerReviewed"
//             ],
//             "title": "Pak Dogol and Wak Long in wayang kulit Kelantan / Mahmoud Dehghanharati",
//             "topics": [
//                 "GR Folklore",
//                 "H Social Sciences (General)"
//             ],
//             "types": [],
//             "year": 2017,
//             "fulltextUrls": [
//                 "https://core.ac.uk/download/pdf/268879059.pdf",
//                 "https://core.ac.uk/display/268879059",
//                 "http://studentsrepo.um.edu.my/7837/1/All.pdf",
//                 "http://studentsrepo.um.edu.my/7837/9/mahmoud.pdf"
//             ],
//             "fulltextIdentifier": "https://core.ac.uk/download/268879059.pdf",
//             "oai": "oai:studentsrepo.um.edu.my:7837",
//             "downloadUrl": "https://core.ac.uk/download/268879059.pdf"
//         }
//     ]
// }






    
console.log(data)
    return (
     
        <div>
        <div className="searchbar">
         <form  onSubmit= {handleSearch}>
<label>
Search CORE:
<input type="text" placeholder="by search term" onChange={e => setSearch(e.target.value)} />
</label>
<input type="submit"  /></form>  

</div> 
{data.length < 1 ? <div><p>From the CORE website:</p><p>CORE's mission is to aggregate all open access research worldwide and deliver unrestricted access for all. In doing so, we:</p><ul>
  <li>enrich scholarly data using state-of-the-art text and data mining technologies to aid discoverability,</li>
<li>enable others to develop new tools and use cases on top of the CORE platform,</li>
<li>support the network of open access repositories and journals with innovative technical, solutions and,</li><li>
facilitate a scalable, cost-effective route for the delivery of open scholarship.</li></ul></div> : 
<div>
<p>Total Results: {data.totalHits} </p><p>We only display the first hundred. You gotta dig in from there. If you find something you can still start a thread about it! || </p>
{/* <span className="previous" onClick={previousPage}> 🡸 Previous </span><span className="next" onClick={(nextPage)}>Next 🡺 </span></p> */}
 </div>}

 
  <div className="disArt">

            {data.length < 1 ? 
<p>.</p> :
           data.data.map(article => <ArticleCard setter={setter} article={article}/>)}
        </div>
         </div>
    )
}

export default Read
