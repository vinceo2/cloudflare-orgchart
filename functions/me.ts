export const onRequestGet: PagesFunction<any> = async (context) => {
    const info = JSON.stringify({
        name: "Vince Otti",
        homepage: "https://www.linkedin.com/in/vincent-otti-689510283/",
        githubURL: "https://github.com/vinceo2",
        interestingFact: "I know how to play 4 instruments - Piano, Tenor Saxophone, Bass Clarinet, and Bassoon",
        skills: ["Web development", "Docker", "AWS"]
    })
 	return new Response(info);
}