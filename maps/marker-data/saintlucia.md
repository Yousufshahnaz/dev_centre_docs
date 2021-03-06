---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: SaintLucia

#### JavaScript Alias: maps/saintlucia


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
</ul>
<div class='tab-content'>
    
<div class='tab new-json-tab active'>
<pre><code class="language-json">
{
    "map": {
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "CCCCCC",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "usehovercolor": "0",
        "hoveronempty": "0",
        "showmarkertooltip": "1",
        "canvasBorderColor": "375277",
        "canvasBorderAlpha": "0"
    },
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "CA",
                "shapeid": "myCustomShape",
                "x": "113.19",
                "y": "130.22",
                "label": "Castries",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "51.92",
                "y": "214.33",
                "label": "Anse Le Raye",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "31.15",
                "y": "323.37",
                "label": "Soufriere",
                "labelpos": "right"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "39.46",
                "y": "420.99",
                "label": "Choiseul",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "157.84",
                "y": "483.3",
                "label": "Vieux Fort"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "227.42",
                "y": "364.91",
                "label": "Micoud",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "240.92",
                "y": "252.76",
                "label": "Dennery",
                "labelpos": "left"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-json">
{
    "map": {},
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "CA",
                "x": "113.19",
                "y": "130.22",
                "label": "Castries",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "51.92",
                "y": "214.33",
                "label": "Anse Le Raye",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "31.15",
                "y": "323.37",
                "label": "Soufriere",
                "labelpos": "right"
            },
            {
                "id": "03",
                "x": "39.46",
                "y": "420.99",
                "label": "Choiseul",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "157.84",
                "y": "483.3",
                "label": "Vieux Fort"
            },
            {
                "id": "05",
                "x": "227.42",
                "y": "364.91",
                "label": "Micoud",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "240.92",
                "y": "252.76",
                "label": "Dennery",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "CA",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>
