

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getLocationGroupConfiguration: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/admin/locationGroupConfiguration/{locationGroupId}?responseFields={responseFields}'
	}),
	getLocationGroupConfigurationByLocationCode: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/admin/locationGroupConfiguration/location/{locationCode}?responseFields={responseFields}'
	}),
	setLocationGroupConfiguration: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/admin/locationGroupConfiguration/{locationGroupId}?responseFields={responseFields}'
	})
});