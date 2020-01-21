let providerkey;
module.exports = {
  getServiceAddress: (req, res) => {
      let data = req.params.data;
      let arr = data.split(',');
      
      if(arr[1] == "home"){
        //data = {'ZIPCODE':arr[0], 'STATUS':'Active','PREMISE_TYPE':'Residential'};
        var query = "SELECT * FROM ercotfact WHERE ZipCode = '"+arr[0]+"' and Status = 'Active' and PremiseType = 'Residential'";
      }
      else{
        var query = "SELECT * FROM ercotfact WHERE ZipCode = '"+arr[0]+"' and Status = 'Active' and PremiseType != 'Residential'";
      }

      db.query(query, (err, result) => {
        if (err) {
          console.log("error query");
        }
        else{
          res.json(result);
        }
        
    });

  },
  getAddressData: (req, res) => {
    let address = req.params.address.replace("*","#");        
    let query = "SELECT * FROM ercotfact where Address = '"+address+"'"; 
    
    // execute query
    db.query(query, (err, result) => {
        if (err) {
          console.log("error query getAddressData");
        }
        else{          
          res.json(result);
        }
        
    });
  },
  
  
  getEnergyRate :(req,res)=>{
    //console.log(JSON.stringify(req.body));
    var query = "SELECT epd.EnergyProviderShortName, upd.UtilityProviderShortName, czd.CongestionZoneShortName, pmf.TermLength, pmf.EnergyRate FROM pricematrixfact pmf JOIN energyproviderdim epd ON pmf.EnergyProviderKey = epd.EnergyProviderId JOIN utilityproviderdim upd ON pmf.UtilityProviderKey = upd.UtilityProviderKey JOIN congestionzonedim czd ON pmf.CongestionZoneKey = czd.CongestionZoneKey JOIN congestionzonezipcodemappingfact czzcmf ON pmf.CongestionZoneKey = czzcmf.CongestionZoneKey AND pmf.EnergyProviderKey = czzcmf.EnergyProviderKey WHERE czzcmf.ZipCode = '"+req.body.zipcode+"' AND pmf.UtilityProviderKey = 1 AND pmf.ServiceStartDateKey = '"+req.body.startmonth+"' AND pmf.TermLength >= "+req.body.planterm[0]+" AND pmf.TermLength <= "+req.body.planterm[1]+" And pmf.AnnualVolumeLowerBound<=0 AND pmf.AnnualVolumeUpperBound>=0 AND pmf.LoadFactor=0 ";
    if(req.body.brand != "All"){
      query += " AND epd.EnergyProviderShortName = '"+req.body.brand+"'";
    }

    db.query(query, (err, result) => {
      if (err) {
        console.log("error query getEnergyRate");
      }
      else{
        res.json(result);
      }
        
    });
  }
  
};
