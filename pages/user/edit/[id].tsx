import Button from "@/components/atoms/Button";
import Layout from "@/components/organisms/Layout";
import { userType } from "@/services/data-types/user-type";
import { userServiceEdit, userServiceUpdate } from "@/services/user-service";
import React, { useState } from "react";

export default function EditUser({
  userDetail,
  id,
}: {
  userDetail: userType;
  id: string;
}) {
  const [datas, setDatas] = useState<userType>(userDetail);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    name: "",
    email: "",
    birthdate: "",
  });

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("name", datas.name);
      data.append("email", datas.email || "");
      data.append("birthdate", datas.birthdate || "");

      const response = await userServiceUpdate(data, id);

      if (!response.error) {
        alert("User created unccessfully");
        // router.push('/user');
      } else {
        if (response.message) {
          Object.entries(response.message).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              setIsError({ ...isError, [key]: "is-invalid" });
              alert(value[0]);
            }
          });
        }
      }
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Layout>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Users</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">Users</li>
            <li className="breadcrumb-item active">Tambah data</li>
          </ol>

          <div className="card-body">
            <form action="">
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder={userDetail.name}
                      value={datas.name}
                      onChange={(e) =>
                        setDatas({ ...datas, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder={userDetail.email}
                      value={datas.email}
                      onChange={(e) =>
                        setDatas({ ...datas, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="mb-3">
                    <label htmlFor="inputBirthdate" className="form-label">
                      Birthdate
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputBirthdate"
                      placeholder=""
                      value={datas.birthdate}
                      onChange={(e) =>
                        setDatas({ ...datas, birthdate: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
            <Button
              type="button"
              onClickButton={onSubmit}
              className={["btn btn-primary"]}
            >
              Submit
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
}

interface GetServerSideProps {
  params: {
    id: string;
  };
}

export async function getServerSideProps({ params }: GetServerSideProps) {
  const { id } = params;

  const response = await userServiceEdit(id);

  return {
    props: {
      userDetail: response.data,
      id: id,
    },
  };
}
