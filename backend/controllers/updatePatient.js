const Patient = require("../models/patientSchema");
module.exports =  function(req, res) {

    async function updateinDb(option, updatedVal, id)
    {
        switch(option)
        {
            case "1":
                {
                    const updated = await Patient.findByIdAndUpdate(
                        id,
                        {phone : updatedVal},
                        {new: true}
                    )

                    if(updated)
                    {
                        return res.status(201).json(
                            {
                                success: true,
                                message: "Patient updated",
                            }
                        ); 
                    }
                    else
                    return res.status(400).json({ error: "Patient not updated" });
                }

            case "2":
                {
                    const updated = await Patient.findByIdAndUpdate(
                        id,
                        {email : updatedVal},
                        {new: true}
                    )

                    if(updated)
                    {
                        return res.status(201).json(
                            {
                                success: true,
                                message: "Patient updated",
                            }
                        ); 
                    }
                    else
                    return res.status(400).json({ error: "Patient not updated" });
                }

            case "3":
                {
                    const updated = await Patient.findByIdAndUpdate(
                        id,
                        {address : updatedVal},
                        {new: true}
                    )

                    if(updated)
                    {
                        return res.status(201).json(
                            {
                                success: true,
                                message: "Patient updated",
                            }
                        ); 
                    }
                    else
                    return res.status(400).json({ error: "Patient not updated" });
                }

            case "4":
                {
                    const updated = await Patient.findByIdAndUpdate(
                        id,
                        {allergy : updatedVal},
                        {new: true}
                    )

                    if(updated)
                    {
                        return res.status(201).json(
                            {
                                success: true,
                                message: "Patient updated",
                            }
                        ); 
                    }
                    else
                    return res.status(400).json({ error: "Patient not updated" });
                }

            case "5":
                {
                    const updated = await Patient.findByIdAndUpdate(
                        id,
                        {medication : updatedVal},
                        {new: true}
                    )

                    if(updated)
                    {
                        return res.status(201).json(
                            {
                                success: true,
                                message: "Patient updated",
                            }
                        ); 
                    }
                    else
                    return res.status(400).json({ error: "Patient not updated" });
                }
                
            }
    }
    try {
        const { option, updatedVal, id } = req.body;
        console.log("Received update request with ID:", option, updatedVal);


        if (!option || !updatedVal) {
            return res.status(400).json({ error: "Please fill the fields properly." });
        }

        updateinDb(option, updatedVal, id);
          
        }
    
     catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: err.message });
    }
};
