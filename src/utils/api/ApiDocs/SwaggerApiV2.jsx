import React from 'react'
import SwaggerUI from 'swagger-ui-react'

import 'swagger-ui-react/swagger-ui.css'
function SwaggerApiV2() {
    return (
        <div style={{ textAlign: 'left' }}>
            <SwaggerUI url="/data/swagger-api-v2.json" />
        </div>
    )
}

export default SwaggerApiV2
