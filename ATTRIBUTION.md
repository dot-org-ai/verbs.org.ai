# Attribution

This document provides detailed attribution for all data sources used in verbs.org.ai.

## Data Sources

### O*NET Work Activities 28.0

- **Source**: [O*NET OnLine](https://www.onetonline.org)
- **License**: Public Domain (U.S. Government Work)
- **Copyright**: U.S. Department of Labor/Employment and Training Administration
- **Data Used**: Work activity verbs from 41 Detailed Work Activities
- **Attribution Required**: Yes (courtesy)

**Citation**:
```
O*NET 28.0 Work Activities
U.S. Department of Labor, Employment and Training Administration
https://www.onetonline.org
Public Domain
```

### GS1 EPCIS 2.0 (Electronic Product Code Information Services)

- **Source**: [GS1 EPCIS Standard](https://www.gs1.org/standards/epcis)
- **License**: GS1 Intellectual Property License
- **Copyright**: GS1 AISBL
- **Data Used**: Business step vocabulary (observing, arriving, departing, receiving, shipping, etc.)
- **Attribution Required**: Yes

**Citation**:
```
GS1 EPCIS 2.0 Business Step Vocabulary
GS1 AISBL
https://www.gs1.org/standards/epcis
GS1 IP License
```

### GS1 Core Business Vocabulary (CBV)

- **Source**: [GS1 CBV](https://www.gs1.org/standards/gs1-core-business-vocabulary-cbv)
- **License**: GS1 Intellectual Property License
- **Copyright**: GS1 AISBL
- **Data Used**: Standard business process verbs and event types
- **Attribution Required**: Yes

**Citation**:
```
GS1 Core Business Vocabulary (CBV)
GS1 AISBL
https://www.gs1.org/standards/gs1-core-business-vocabulary-cbv
GS1 IP License
```

## How We Use This Data

The verbs.org.ai ontology combines and extends data from these sources by:

1. **Full Conjugation**: 6 semantic forms for each verb (predicate, event, activity, actor, object, inverse)
2. **Business-as-Code Patterns**: Enabling `$.Subject.predicate.Object` semantic triples
3. **Semantic Consistency**: Unified verb ontology across supply chain, work activities, and business processes
4. **MDX Documentation**: Structured documentation with usage examples
5. **SDK Integration**: Seamless integration with sdk.do and the .org.ai ecosystem

## Our License

This derived work is licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0). We respect the licenses of our source materials while adding the ShareAlike requirement to ensure improvements remain open.

## Required Attribution

When using verbs.org.ai, please include:

```
Based on verbs.org.ai (https://verbs.org.ai)
Data sourced from:
- O*NET 28.0 (https://www.onetonline.org) - Public Domain
- GS1 EPCIS 2.0 (https://www.gs1.org) - GS1 IP License
- GS1 CBV (https://www.gs1.org) - GS1 IP License
Licensed under CC BY-SA 4.0
```

## GS1 IP License Notice

GS1® is a registered trademark of GS1 AISBL. The use of GS1 standards and vocabularies is subject to the GS1 Intellectual Property License, which permits use of the standards for implementation purposes with proper attribution.

For more information about GS1 IP rights:
https://www.gs1.org/terms-of-use

## Acknowledgments

We are grateful to:

- **U.S. Department of Labor/ETA** for O*NET work activity classifications that enable better understanding of occupational tasks
- **GS1** for developing global supply chain standards (EPCIS, CBV) that enable visibility and interoperability across the global supply chain
- The broader **business process community** for contributing to standardized vocabularies

## Contact

For questions about attribution or licensing:
- Website: https://verbs.org.ai
- GitHub: https://github.com/dot-org-ai/verbs.org.ai/issues
- Community: https://github.com/dot-org-ai/community

## Updates

This attribution document is maintained alongside the verbs.org.ai repository. Last updated: 2025-01-17
