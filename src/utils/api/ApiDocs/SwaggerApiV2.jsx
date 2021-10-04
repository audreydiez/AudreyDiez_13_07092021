import React from 'react'
import SwaggerUI from 'swagger-ui-react'

import 'swagger-ui-react/swagger-ui.css'
function SwaggerApiV2() {
    return (
        <div className="App">
            <SwaggerUI url="https://github.com/audreydiez/AudreyDiez_13_07092021/tree/develop/src/assets/data/swagger-api-v2.json" />
        </div>
    )
}

export default SwaggerApiV2
