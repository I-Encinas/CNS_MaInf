<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
        return[
            'id'=>$this->id,
            'service_id'=> new ServiceResource($this->service_id), 
            'ci'=>$this->ci,
            'name'=>$this->name,
            'paternal_surname'=>$this->paternal_surname,
            'maternal_surname'=>$this->maternal_surname,
            'address'=>$this->address,
            'phone'=>$this->phone,
            'created_at'=>(new Carbon($this->created_at))->format('Y-m-d'),  
            'updated_at'=>(new Carbon($this->updated_at))->format('Y-m-d'),  
        ];
    }
}
