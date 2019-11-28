{
    type: "sankey",
    renderAt: "container",
    id: "sankey-chart",
    width: "700",
    height: "400",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Immigrant Flow for Last Month (In Millions)",
            captionAlignment: "left",
            captionFontColor: "#333333",
            captionFontSize: 18,
            legendPosition: "bottom",
            linkcolor: 'blend'
        },
        nodes: [{
                label: "Netherlands"
            },
            {
                label: "Canada"
            },
            {
                label: "Belgium"
            },
            {
                label: "Italy"
            },
            {
                label: "Mexico"
            },
            {
                label: "Russia"
            },
            {
                label: "Spain"
            },
            {
                label: "South Korea"
            },
            {
                label: "Germany"
            },
            {
                label: "China"
            },
            {
                label: "European Union"
            },
            {
                label: "Japan"
            },
            {
                label: "United Kingdom"
            },
            {
                label: "United States"
            },
            {
                label: "France"
            },
            {
                label: "Hong Kong"
            },
            {
                label: "Switzerland"
            },
            {
                label: "Austria"
            },
            {
                label: "Sweden"
            }
        ],
        links: [{
                from: "Netherlands",
                to: "European Union",
                value: 798744
            },
            {
                from: "Germany",
                to: "European Union",
                value: 1468990
            },
            {
                from: "European Union",
                to: "France",
                value: 745931
            },
            {
                from: "European Union",
                to: "United States",
                value: 660541
            },
            {
                from: "Canada",
                to: "United States",
                value: 594546
            },
            {
                from: "Belgium",
                to: "European Union",
                value: 628796
            },
            {
                from: "China",
                to: "Hong Kong",
                value: 400571
            },
            {
                from: "China",
                to: "United States",
                value: 526454
            },
            {
                from: "European Union",
                to: "United Kingdom",
                value: 520318
            },
            {
                from: "China",
                to: "European Union",
                value: 560536
            },
            {
                from: "Italy",
                to: "European Union",
                value: 539556
            },
            {
                from: "Mexico",
                to: "United States",
                value: 492715
            },
            {
                from: "Russia",
                to: "European Union",
                value: 385778
            },
            {
                from: "Spain",
                to: "European Union",
                value: 365191
            },
            {
                from: "China",
                to: "Japan",
                value: 312062
            },
            {
                from: "European Union",
                to: "Switzerland",
                value: 328609
            },
            {
                from: "South Korea",
                to: "China",
                value: 229073
            },
            {
                from: "European Union",
                to: "Austria",
                value: 244913
            },
            {
                from: "Japan",
                to: "United States",
                value: 206091
            },
            {
                from: "European Union",
                to: "Sweden",
                value: 204849
            },
            {
                from: "Germany",
                to: "United States",
                value: 184287
            }
        ]
    }
}